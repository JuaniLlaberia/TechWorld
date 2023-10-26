import ArticleList from '../features/articles/ArticleList';
import ArticlesSearchbar from '../features/articles/ArticlesSearchbar';

const Articles = () => {
  return (
    <>
      <h1 className='text-light-1 font-semibold text-3xl mb-6'>Articles</h1>
      <ArticlesSearchbar />
      <ArticleList />
    </>
  );
};

export default Articles;
