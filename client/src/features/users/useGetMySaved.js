import { useQuery } from '@tanstack/react-query';
import { getMySaved } from '../../api/usersApi';

export const useGetMySaved = () => {
  const { data: jobs, isLoading } = useQuery({
    queryFn: getMySaved,
    queryKey: ['saved-jobs'],
    staleTime: 100000000,
  });

  return { jobs, isLoading };
};
