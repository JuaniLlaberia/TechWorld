import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { searchByQuery as searchByQueryAPI } from '../../api/jobApi';

export const useSearchByQuery = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('searchQuery');

  const { data, isRefetching, refetch } = useQuery({
    queryFn: () => searchByQueryAPI(query),
    queryKey: ['query-search-test', query],
    enabled: !!query,
    staleTime: 300000,
    force: true,
  });

  return { data, isRefetching, refetch };
};
