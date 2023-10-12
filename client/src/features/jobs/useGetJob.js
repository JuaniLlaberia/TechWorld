import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getJob } from '../../api/jobApi';
import { useAuthContext } from '../../context/AuthContext';

export const useGetJob = () => {
  // const { id } = useParams();
  const [searchparams] = useSearchParams();

  const id = searchparams.get('currentJobId') || '';

  const { isAuth } = useAuthContext();

  const { data: job, isLoading } = useQuery({
    queryFn: () => getJob(id),
    queryKey: ['job', id],

    refetchOnWindowFocus: false,
    enabled: isAuth,
  });

  return { job, isLoading };
};
