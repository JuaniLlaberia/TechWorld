import MyArticleItem from './MyArticleItem';

const ArticleNoInfList = ({ articles }) => {
  return (
    <ul className='mb-20'>
      {articles.map(article => (
        <MyArticleItem
          key={article._id}
          article={article}
        />
      ))}
    </ul>
  );
};

export default ArticleNoInfList;
