import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getJobs } from '../features/jobs/jobApi';

export const useGetJobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const experience = searchParams.get('level') || 'All';
  const jobType = searchParams.get('type') || 'All';
  const place = searchParams.get('place') || 'All';

  const {
    data: jobs,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getJobs(experience, jobType, place),
    queryKey: ['jobs', experience, jobType, place],
  });

  return { jobs, isLoading, error };
};
