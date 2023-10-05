import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getUsersByProfession } from '../../api/usersApi';

export const useGetUsers = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('searchQuery');
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const { data: users, isLoading } = useQuery({
    queryFn: () => getUsersByProfession(query, '', page),
    queryKey: [`users`, query, page],
  });

  return { users, isLoading };
};
