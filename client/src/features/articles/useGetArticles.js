import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../../api/articleApi';

export const useGetArticles = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  const {
    data: articles,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) =>
      getArticles({ page: pageParam, searchQuery }),
    queryKey: ['articles', searchQuery],
    refetchOnWindowFocus: false,
    cacheTime: 0,
    getNextPageParam: (lastPage, pages) =>
      pages.length < lastPage.pages ? pages.length + 1 : null,
  });

  return { articles, fetchNextPage, isFetchingNextPage, hasNextPage, status };
};
