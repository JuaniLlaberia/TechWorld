const Article = require('../models/articleModel');
const catchErrorAsync = require('../utils/catchErrorAsync');

exports.getArticles = catchErrorAsync(async (req, res) => {
  let query = Article.find({
    $or: [
      { title: { $regex: req.query.search || '', $options: 'i' } },
      { tag: { $regex: req.query.search || '', $options: 'i' } },
    ],
  });

  if (req.query.page) {
    const page = Number(req.query.page) || 1;
    const limit = req.query.limit || process.env.PAGE_SIZE;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);
  }

  const totalArticles = await Article.countDocuments(query._conditions);

  const articles = await query
    .select('title author createdAt tag')
    .populate('author', 'fullName image');

  res.status(200).json({
    status: 'success',
    pages: Math.ceil(totalArticles / process.env.PAGE_SIZE),
    data: { articles },
  });
});

exports.getArticle = catchErrorAsync(async (req, res) => {
  const article = await Article.findById(req.params.id).populate(
    'author',
    'fullName image'
  );

  res.status(200).json({ status: 'success', data: { article } });
});

exports.createArticle = catchErrorAsync(async (req, res) => {
  const newArticle = { ...req.body, author: req.user.id };
  const article = await Article.create(newArticle);

  res.status(200).json({
    status: 'success',
    data: { article },
  });
});

exports.getMyArticles = catchErrorAsync(async (req, res) => {
  const articles = await Article.find({
    author: req.user.id,
    view: req.query.type === 'published',
  }).select('title createdAt tag');

  res.status(200).json({
    status: 'success',
    data: { articles },
  });
});

exports.updateArticle = catchErrorAsync(async () => {});
exports.deleteArticle = catchErrorAsync(async () => {});
exports.likeArticle = catchErrorAsync(async () => {});
exports.unLikeArticle = catchErrorAsync(async () => {});
