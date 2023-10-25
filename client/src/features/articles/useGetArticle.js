import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getArticle } from '../../api/articleApi';

export const useGetArticle = () => {
  const { id } = useParams();

  const { data: article, isLoading } = useQuery({
    queryFn: () => getArticle(id),
    queryKey: ['articles', id],
  });

  return { article, isLoading };
};
