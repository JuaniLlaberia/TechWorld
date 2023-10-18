const Job = require('../models/jobsModel');
const catchErrorAsync = require('../utils/catchErrorAsync');
const Email = require('../utils/emails');
const CustomError = require('../utils/error');

exports.getAllJobs = catchErrorAsync(async (req, res) => {
  //Filtering fields from URL
  const filteredObj = { ...req.query };
  const fieldsToExclude = [
    'sort',
    'select',
    'page',
    'limit',
    'search',
    'location',
  ];
  fieldsToExclude.forEach(el => delete filteredObj[el]);

  let queryString = JSON.stringify(filteredObj);
  queryString = queryString.replace(/gte|gt|lte|lt/, match => `$${match}`);

  //Creating the QUERY
  let query = Job.find({
    ...JSON.parse(queryString),
    //Using search param we can query for jobs that contain str in name
    name: { $regex: req.query.search || '', $options: 'i' },
    location: { $regex: req.query.location || '', $options: 'i' },
  });

  //Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.replaceAll(',', ' ');
    query.sort(sortBy);
  }

  //Select fields
  if (req.query.select) {
    const fields = req.query.select.replaceAll(',', ' ');
    query.select(fields);
  }

  if (req.query.limit) {
    query.limit(req.query.limit);
  }

  //Pagination
  if (req.query.page) {
    const page = Number(req.query.page) || 1;
    const limit = req.query.limit || process.env.PAGE_SIZE;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);
  }

  // Get data from database
  const totalJobs = await Job.countDocuments(query._conditions);

  const jobs = await query
    .select('name user location workPlace')
    .populate('user', 'fullName image');

  //Return data
  res.status(200).json({
    status: 'success',
    count: totalJobs,
    pages: Math.ceil(totalJobs / process.env.PAGE_SIZE),
    data: {
      jobs,
    },
  });
});

exports.getJobsArea = catchErrorAsync(async (req, res, next) => {
  const { distance, latlng } = req.query;
  const [lat, lng] = latlng?.split(',');
  const radius = distance / 6378.1;

  if (!lat || !lng)
    return next(
      new CustomError('Please provide latitude and longitude (lat,lng).', 400)
    );

  const jobs = await Job.find({
    locationMap: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    status: 'success',
    count: jobs.length,
    data: {
      jobs,
    },
  });
});

exports.getJob = catchErrorAsync(async (req, res) => {
  const job = await Job.findById(req.params.id).populate(
    'user',
    'fullName image'
  );

  res.status(200).json({
    status: 'success',
    data: {
      job,
    },
  });
});

exports.createJob = catchErrorAsync(async (req, res) => {
  const newJob = { ...req.body, createdBy: req.user.id };

  const job = await Job.create(newJob);
  res.status(201).json({ status: 'success', data: { job } });
});

exports.updateJob = catchErrorAsync(async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: 'success', data: { job } });
});

exports.deleteJob = catchErrorAsync(async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.status(200).json({ status: 'success', data: null });
});

//Get all post from a user
exports.getJobsFromUser = catchErrorAsync(async (req, res) => {
  const jobs = await Job.find({ user: req.params.id });
  res.status(200).json({ status: 'success', count: jobs.length, data: jobs });
});

//Get all the jobs posted by me
exports.getMyJobs = catchErrorAsync(async (req, res) => {
  const jobs = await Job.find({ user: req.user.id }).select(
    'name position level type location description workPlace user'
  );
  res.status(200).json({ status: 'success', count: jobs.length, data: jobs });
});

exports.applyJob = catchErrorAsync(async (req, res) => {
  const job = await Job.findById(req.body.jobId)
    .populate('user', 'email')
    .select('name');

  new Email(
    job.user,
    `https://techworld-jobs.vercel.app/user/${req.user.id}`,
    req.file.buffer
  ).applyJobEmail(job.name, req.body);

  res
    .status(200)
    .json({ status: 'success', message: 'Application sent correctly.' });
});
