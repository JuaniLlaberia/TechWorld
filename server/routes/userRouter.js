const express = require('express');

const userController = require('../controllers/userController');
const router = express.Router();

router.route('/').get(userController.getUsers);

router.route('/update-me', userController.updateMe);
router.route('/me', userController.getMe);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
