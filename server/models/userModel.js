const mongoose = require('mongoose');
const bcrpyt = require('bcrypt');

const experienceSchema = new mongoose.Schema({
  position: String,
  from: Date,
  until: Date,
  company: String,
  reference: String,
});

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'User must have a name'],
  },
  profession: {
    type: String,
    required: [true, 'Must input a profession'],
  },
  location: String,
  role: {
    type: String,
    default: 'user',
  },
  email: {
    type: String,
    required: [true, 'User must have an email'],
    unique: true,
    validate: {
      validator: value =>
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value),
      message: 'Please input a valid email address.',
    },
  },
  skills: [String],
  experience: [experienceSchema],
  password: {
    type: String,
    required: [true, 'User must have a password'],
    minLength: [8, 'Password must be at least 10 characters'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Must confirm the password'],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: 'Passwords must match',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  image: {
    type: String,
    default: 'default.png', //Will be a default image for all users until they change it
  },
  description: { type: String },
  savedPosts: {
    type: [{ type: mongoose.Schema.ObjectId, ref: 'Job' }],
  },
  token: String,
  createdAt: { type: Date, default: Date.now() },
  verified: {
    type: Boolean,
    default: false,
    required: [true, 'This field is required'],
  },
});

//Implement password encryption
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrpyt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
