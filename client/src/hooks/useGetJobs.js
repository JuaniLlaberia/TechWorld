import { useQuery } from '@tanstack/react-query';
import { getJobs } from '../features/jobs/jobApi';

export const useGetJobs = () => {
  const {
    data: jobs,
    isLoading,
    error,
  } = useQuery({
    queryFn: getJobs,
    queryKey: ['jobs'],
  });

  return { jobs, isLoading, error };
};
