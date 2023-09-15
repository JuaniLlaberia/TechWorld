const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.patch('/update-me', authController.protect, userController.updateMe);
router.get('/me', authController.protect, userController.getMe);
router.delete('/delete-me', authController.protect, userController.deleteMe);
// router.patch('/updateMyPassword', userController.updateMe);

router.route('/').get(authController.protect, userController.getUsers);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
