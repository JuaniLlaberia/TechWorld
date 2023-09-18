const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      count: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      // message: 'There was a problem retrieving the data.',
      message: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select(
      '_id fullName image profession email'
    );

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: `No user with ${req.params.id} found.`,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    if (req.body.password || req.body.passwordConfirm)
      return next(new Error('Not allowed to update password in this endpoint'));

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

//User interactions

exports.getMe = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: req.user,
  });
};

exports.updateMe = async (req, res) => {
  //Does not work for passwords (just for information)
  try {
    if (req.body.password || req.body.passwordConfirm)
      throw new Error(
        'This endpoint is not to update passwords (just user info).'
      );

    let filteredObj = { ...req.body };
    const fieldsToRemove = ['_id', 'role', 'savedPosts', 'passwordChangedAt'];
    fieldsToRemove.forEach(el => delete filteredObj[el]);

    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredObj, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.deleteMe = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

//Save job in user favorite
exports.saveJob = async (req, res, next) => {
  const postToSave = req.params.id;

  if (req.user.savedPosts.includes(postToSave))
    return res.status(404).json({
      status: 'failed',
      message: 'Post is already saved in this user.',
    });

  const allSavedPosts = [...req.user.savedPosts, postToSave];

  await User.findByIdAndUpdate(req.user.id, { savedPosts: allSavedPosts });

  res.status(200).json({
    status: 'success',
    message: 'Saved successfully.',
  });
};

exports.unSaveJob = async (req, res) => {
  try {
    const newSavedPosts = req.user.savedPosts.filter(
      job => job.toString('hex') !== req.params.id
    );

    await User.findByIdAndUpdate(req.user.id, { savedPosts: newSavedPosts });

    res.status(200).json({
      status: 'success',
      message: 'Unsaved successfully.',
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err });
  }
};
