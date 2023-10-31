import { useQuery } from '@tanstack/react-query';
import { getMyArticles } from '../../api/articleApi';

export const useGetMyArticles = published => {
  const { data: articles, isLoading } = useQuery({
    queryFn: () => getMyArticles(published),
    queryKey: ['my-articles', published],
  });

  return { articles, isLoading };
};
