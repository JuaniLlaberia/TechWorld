import ArticleList from '../features/articles/ArticleList';
import ArticlesSearchbar from '../features/articles/ArticlesSearchbar';

const Articles = () => {
  return (
    <section className='flex flex-col items-center'>
      <ArticlesSearchbar />
      <ArticleList />
    </section>
  );
};

export default Articles;
