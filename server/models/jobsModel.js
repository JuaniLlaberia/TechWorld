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
    enum: [
      'Intership',
      'Entry-level',
      'Mid-level',
      'Senior-level',
      'Executive',
    ],
  },
  type: {
    type: String,
    required: [true, 'Must include a type.'],
    enum: ['Full-time', 'Part-time', 'Remote'],
  },
  salaryMin: {
    type: Number,
    min: [1, 'Salary must be at least 1'],
  },
  salaryMax: {
    type: Number,
  },
  summary: {
    type: String,
    required: [true, 'Must include a job summary.'],
    minLength: [20, 'Must include at least 20 characters.'],
    maxLength: [200, 'Must include less than 200 characters.'],
  },
  location: {
    type: String,
    required: [true, 'A job must have a location'],
  },
  locationMap: {
    type: {
      type: String,
      enum: ['Point'],
      // required: true,
    },
    coordinates: {
      type: [Number],
      // required: true,
    },
  },
  description: {
    type: String,
  },
  expirationDate: {
    type: Date,
    required: [true, 'Must include an expiration date.'],
  },
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
// jobsSchema.index({ locationMap: '2dsphere' });

jobsSchema.pre(/^find/, function (next) {
  this.select('-__v');
  next();
});

const Job = mongoose.model('Job', jobsSchema);

module.exports = Job;
