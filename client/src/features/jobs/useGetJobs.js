import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getJobs } from '../../api/jobApi';

export const useGetJobs = (searchQuery, locationQuery) => {
  const [searchParams] = useSearchParams();

  const experience = searchParams.get('level') || 'All';
  const jobType = searchParams.get('type') || 'All';
  const place = searchParams.get('place') || 'All';
  const query = searchQuery || searchParams.get('search') || '';
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const location = locationQuery || searchParams.get('location') || '';

  const {
    data: jobs,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getJobs(experience, jobType, place, query, page, location),
    queryKey: ['jobs', experience, jobType, place, query, page, location],
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return { jobs, isLoading, error };
};
