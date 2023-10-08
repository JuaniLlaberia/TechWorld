import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getJobs } from '../../api/jobApi';

export const useGetJobs = searchQuery => {
  const [searchParams] = useSearchParams();

  const query = searchQuery || searchParams.get('search') || '';

  const {
    data: jobs,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getJobs({ query }),
    queryKey: ['jobs', query],
    refetchOnWindowFocus: false,
    staleTime: 10000,
  });

  return { jobs, isLoading, error };
};
