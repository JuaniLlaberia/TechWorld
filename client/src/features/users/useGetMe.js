import { useQuery } from '@tanstack/react-query';
import { getMe } from '../../api/usersApi';

export const useGetMe = () => {
  const { data: user, isLoading } = useQuery({
    queryFn: getMe,
    queryKey: ['user'],
    staleTime: 100000,
  });

  return { user, isLoading };
};
