import { useQuery } from '@tanstack/react-query';
import { getMe } from '../features/users/usersApi';

export const useGetMe = () => {
  const { data: user, isLoading } = useQuery({
    queryFn: getMe,
    queryKey: ['user'],
  });

  return { user, isLoading };
};
