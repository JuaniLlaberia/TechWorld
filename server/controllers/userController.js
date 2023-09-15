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
      message: 'There was a problem retrieving the data.',
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

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

exports.updateUser = async (req, res) => {};
exports.deleteUser = async (req, res) => {};

exports.getMe = async (req, res) => {};
exports.updateMe = async (req, res) => {};
