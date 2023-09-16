const express = require('express');
const jobsController = require('../controllers/jobsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/my-jobs', authController.protect, jobsController.getMyJobs);

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
