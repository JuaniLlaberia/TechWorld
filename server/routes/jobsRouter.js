const express = require('express');
const mutler = require('multer');
const jobsController = require('../controllers/jobsController');
const authController = require('../controllers/authController');
const multer = require('multer');

const router = express.Router();
const storage = mutler.memoryStorage();
const upload = multer({ storage: storage });

router.get('/my-jobs', authController.protect, jobsController.getMyJobs);
router.get('/by-area', jobsController.getJobsArea);
router.post(
  '/apply',
  authController.protect,
  upload.single('application'),
  jobsController.applyJob
);

router
  .route('/')
  .get(jobsController.getAllJobs)
  .post(authController.protect, jobsController.createJob);

router
  .route('/:id')
  .get(jobsController.getJob)
  .patch(
    authController.protect,
    authController.postBelongsToUser,
    jobsController.updateJob
  )
  .delete(
    authController.protect,
    authController.postBelongsToUser,
    jobsController.deleteJob
  );

module.exports = router;
