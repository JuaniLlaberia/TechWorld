import ItemSkeleton from '../../components/ItemSkeleton';
import ArticleNoInfList from './ArticleNoInfList';
import { useGetMyArticles } from './useGetMyArticles';

const MyArticlesDraft = () => {
  const { articles, isLoading } = useGetMyArticles('draft');

  if (isLoading) return <ItemSkeleton amount={5} />;

  if (articles.count === 0)
    return (
      <h1 className='text-light-2 text-center text-xl py-3'>
        You have no articles. You can start writting one now.
      </h1>
    );

  return <ArticleNoInfList articles={articles.data.articles} />;
};

export default MyArticlesDraft;
