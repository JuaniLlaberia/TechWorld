import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getUsersByProfession } from '../../api/usersApi';

export const useGetUsers = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('searchQuery');

  const { data: users, isLoading } = useQuery({
    queryFn: () => getUsersByProfession(query, ''),
    queryKey: [`users`, query],
  });

  return { users, isLoading };
};
