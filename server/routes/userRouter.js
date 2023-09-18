const express = require('express');
const rateLimit = require('express-rate-limit');
const userController = require('../controllers/userController');
const jobsController = require('../controllers/jobsController');
const authController = require('../controllers/authController');

//Limiting email confirmation resend to 1 per minute.
const emailLimiter = rateLimit({
  max: 1,
  windowMs: 60 * 1000,
  message:
    'You can only re-send the email confirmation every 60 seconds. Please wait and try again!',
});

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/verify/:token', authController.activateAccount);
router.post(
  '/resend-token',
  emailLimiter,
  authController.resendConfirmationEmail
);
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

router.post('/save-post/:id', authController.protect, userController.saveJob);
router.post(
  '/unsave-post/:id',
  authController.protect,
  userController.unSaveJob
);

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

router.route('/:id/jobs').get(jobsController.getJobsFromUser);

module.exports = router;
