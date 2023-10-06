import { useQuery } from '@tanstack/react-query';
import { getMyJobs } from '../../api/jobApi';

export const useGetMyJobs = () => {
  const { data: myJobs, isLoading } = useQuery({
    queryFn: getMyJobs,
    queryKey: ['my-jobs'],
    staleTime: 100000000,
  });

  return { myJobs, isLoading };
};
