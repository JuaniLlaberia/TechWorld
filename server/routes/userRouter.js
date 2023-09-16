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
router.post(
  '/update-my-password',
  authController.protect,
  authController.changePassword
);

router.post('/forgot-password', authController.sendResetPasswordToken);
router.post('/reset-password/:token', authController.resetPassword);

//Protected to auth - Should it be restricted? or do i want to be able to fetch the users
router.route('/').get(authController.protect, userController.getUsers);

router
  .route('/:id')
  //User will be public so people can see who posts the jobs
  .get(userController.getUser)
  //This are only for admins (as users have their own '-me')
  .patch(
    authController.protect,
    authController.onlyAdmin,
    userController.updateUser
  )
  .delete(
    authController.protect,
    authController.onlyAdmin,
    userController.deleteUser
  );

module.exports = router;
