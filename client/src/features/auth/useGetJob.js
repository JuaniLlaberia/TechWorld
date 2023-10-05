import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getJob } from '../../api/jobApi';

export const useGetJob = () => {
  const { id } = useParams();

  const { data: job, isLoading } = useQuery({
    queryFn: () => getJob(id),
    queryKey: ['job', id],
  });

  return { job, isLoading };
};
