import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getUsersByProfession } from '../../api/usersApi';

export const GetUsersByProfession = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('searchQuery');

  const {
    data: users,
    isRefetching,
    refetch,
  } = useQuery({
    queryFn: () => getUsersByProfession({ profession: query, limit: 3 }),
    queryKey: [`users-search`, query],
    enabled: !!query,
    staleTime: 300000,
    force: true,
  });

  return { users, isRefetching, refetch };
};
