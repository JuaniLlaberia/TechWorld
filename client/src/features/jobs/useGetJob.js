import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getJob } from '../../api/jobApi';

export const useGetJob = () => {
  const [searchparams] = useSearchParams();
  const id = searchparams.get('currentJobId') || '';

  const { data: job, isLoading } = useQuery({
    queryFn: () => getJob(id),
    queryKey: ['job', id],

    refetchOnWindowFocus: false,
  });

  return { job, isLoading };
};
