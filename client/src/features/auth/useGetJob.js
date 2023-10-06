import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getJob } from '../../api/jobApi';
import { useAuthContext } from '../../context/AuthContext';

export const useGetJob = () => {
  const { id } = useParams();
  const { isAuth } = useAuthContext();

  const { data: job, isLoading } = useQuery({
    queryFn: () => getJob(id),
    queryKey: ['job', id],

    enabled: isAuth,
  });

  return { job, isLoading };
};
