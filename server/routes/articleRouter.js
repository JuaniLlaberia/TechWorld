const express = require('express');
const articlesController = require('../controllers/articlesController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(articlesController.getArticles)
  .post(authController.protect, articlesController.createArticle);

router
  .route('/:id')
  .get(articlesController.getArticle)
  .patch(
    authController.protect,
    authController.articleBelongsToUser,
    articlesController.updateArticle
  )
  .delete(
    authController.protect,
    authController.articleBelongsToUser,
    articlesController.deleteArticle
  );

module.exports = router;
