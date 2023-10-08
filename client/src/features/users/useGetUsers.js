import { useSearchParams } from 'react-router-dom';
import { getUsersByProfession } from '../../api/usersApi';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetUsersInf = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('searchQuery');

  const {
    data: users,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [`users`, query],
    queryFn: ({ pageParam = 1 }) =>
      getUsersByProfession({
        page: pageParam,
        limit: '',
        profession: query,
      }),
    refetchOnWindowFocus: false,
    cacheTime: 0,
    getNextPageParam: (lastPage, pages) =>
      pages.length < lastPage.pages ? pages.length + 1 : null,
  });

  return { users, fetchNextPage, isFetchingNextPage, hasNextPage, status };
};
