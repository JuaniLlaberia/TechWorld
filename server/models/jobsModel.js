const mongoose = require('mongoose');

const jobsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must include a job name.'],
    minLength: [5, 'Must have at least 5 characters.'],
    maxLength: [40, `Can't have more than 40 characters.`],
  },
  position: {
    type: String,
    required: [true, 'Must include a position'],
    maxLength: [30, 'Must include less than 30 characters.'],
  },
  level: {
    type: String,
    required: [true, 'Must include the level of the job.'],
    enum: ['Entry-level', 'Mid-level', 'Senior-level', 'Executive'],
  },
  type: {
    type: String,
    required: [true, 'Must include a type.'],
    enum: ['Full-time', 'Part-time', 'Intership'],
  },
  workPlace: {
    type: String,
    required: [true, 'Must include a work place.'],
    enum: ['On-site', 'Remote', 'Hybrid'],
  },
  location: {
    type: String,
    required: [true, 'A job must have a location'],
  },
  locationMap: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    },
  },
  description: {
    required: [true, 'Must include a job description.'],
    type: String,
  },
  applicationUs: {
    type: Boolean,
    default: true,
  },
  companyUrl: String,
  createAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

jobsSchema.index({ name: 1 });
jobsSchema.index({ level: 1, type: 1 });

jobsSchema.pre(/^find/, function (next) {
  this.select('-__v');
  next();
});

const Job = mongoose.model('Job', jobsSchema);

module.exports = Job;
