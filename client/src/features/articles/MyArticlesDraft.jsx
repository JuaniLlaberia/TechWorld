import ItemSkeleton from '../../components/ItemSkeleton';
import ArticleNoInfList from './ArticleNoInfList';
import { useGetMyArticles } from './useGetMyArticles';

const MyArticlesDraft = () => {
  const { articles, isLoading } = useGetMyArticles('draft');

  if (isLoading) return <ItemSkeleton amount={5} />;

  return <ArticleNoInfList articles={articles.data.articles} />;
};

export default MyArticlesDraft;
