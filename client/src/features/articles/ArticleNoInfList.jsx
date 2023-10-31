import MyArticleItem from './MyArticleItem';

const ArticleNoInfList = ({ articles }) => {
  return (
    <ul className='mb-20 w-full lg:w-[70vw] xl:w-[40vw]'>
      {articles.map(article => (
        <MyArticleItem key={article._id} article={article} />
      ))}
    </ul>
  );
};

export default ArticleNoInfList;
