import { useQuery } from '@tanstack/react-query';
import { searchJobs } from '../../api/jobApi';
import { useSearchParams } from 'react-router-dom';

export const useSearchJobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('searchQuery');

  const {
    data: jobs,
    isRefetching,
    refetch,
  } = useQuery({
    queryFn: () => searchJobs(query),
    queryKey: [`jobs-search`, query],
    enabled: !!query,
    staleTime: 300000,
    force: true,
  });

  return { jobs, isRefetching, refetch };
};
