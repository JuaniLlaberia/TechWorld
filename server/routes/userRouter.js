const express = require('express');
const rateLimit = require('express-rate-limit');
const userController = require('../controllers/userController');
const jobsController = require('../controllers/jobsController');
const authController = require('../controllers/authController');
const multer = require('multer');

//Limiting email confirmation resend to 1 per minute.
const emailLimiter = rateLimit({
  max: 1,
  windowMs: 60 * 1000,
  message:
    'You can only re-send the email confirmation every 60 seconds. Please wait and try again!',
});

const loginLimiter = rateLimit({
  max: 3,
  windowMs: 60 * 1000,
  message: 'Too many attemps. Try later or reset your password.',
});

const router = express.Router();
const storage = multer.memoryStorage();
const update = multer({ storage: storage });

router.post('/signup', authController.signup);
router.post('/verify/:token', authController.activateAccount);
router.post(
  '/resend-token',
  emailLimiter,
  authController.resendConfirmationEmail
);
router.post('/login', loginLimiter, authController.login);
router.post('/logout', authController.logout);

router.patch(
  '/update-me',
  authController.protect,
  update.single('userImg'),
  userController.updateMe
);
router.get('/me', authController.protect, userController.getMe);
router.delete('/delete-me', authController.protect, userController.deleteMe);

router.patch(
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
router.get('/saved-posts', authController.protect, userController.getSavedJobs);

router.route('/').get(userController.getUsers);

router
  .route('/:id')
  .get(authController.protect, userController.getUser)

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
