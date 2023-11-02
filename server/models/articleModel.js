const mongoose = require('mongoose');
const { JSDOM } = require('jsdom');
const DOMPurify = require('dompurify')(new JSDOM().window);

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Articles must have a title.'],
    minLength: [5, 'Article title must have at least 5 characters.'],
    maxLength: [50, 'Article title must have less than 50 characters.'],
  },
  content: {
    type: String,
    required: [true, 'Articles must  have a content body.'],
    minLength: [10, 'Article body must have at least 10 characters.'],
    maxLength: [2000, 'Article body must have less than 2000 characters.'],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  view: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tag: {
    type: String,
    required: [true, 'Must have a tag'],
  },
});

articleSchema.pre('save', function (next) {
  if (this.content && typeof this.content === 'string') {
    const cleanContent = DOMPurify.sanitize(this.content);
    this.content = cleanContent;
  }
  next();
});

articleSchema.pre(/^find/, function (next) {
  this.select('-__v');
  next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
