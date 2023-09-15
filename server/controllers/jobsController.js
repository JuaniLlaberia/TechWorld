const Job = require('../models/jobsModel');

exports.getAllJobs = async (req, res) => {
  try {
    //Get data from database
    const jobs = await Job.find();

    //Return data
    res.status(200).json({
      status: 'success',
      count: jobs.length,
      data: {
        jobs,
      },
    });
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.log(err);

    //Return error
    res.status(404).json({
      status: 'failed',
      message: 'There was a problem retrieving the data.',
    });
  }
};

exports.getJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        job,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: `No job with id: ${id}`,
    });
  }
};

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ status: 'success', data: { job } });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ status: 'success', data: { job } });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    await Job.findByIdAndDelete(id);
    res.status(200).json({ status: 'success', data: null });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: `No job with id: ${id}`,
    });
  }
};
