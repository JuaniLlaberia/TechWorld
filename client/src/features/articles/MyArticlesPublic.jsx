import ItemSkeleton from '../../components/ItemSkeleton';
import ArticleNoInfList from './ArticleNoInfList';
import { useGetMyArticles } from './useGetMyArticles';

const MyPublishedArticles = () => {
  const { articles, isLoading } = useGetMyArticles('published');

  if (isLoading) return <ItemSkeleton amount={5} />;

  return <ArticleNoInfList articles={articles.data.articles} />;
};

export default MyPublishedArticles;
