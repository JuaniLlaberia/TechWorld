import ArticleForm from './ArticleForm';
import { useGetArticle } from './useGetArticle';

const UpdateArticle = () => {
  const { article, isLoading } = useGetArticle();
  if (isLoading) return <h1 className='text-light-1'>Loading...</h1>;
  return <ArticleForm articleToEdit={article.data.article} />;
};

export default UpdateArticle;
