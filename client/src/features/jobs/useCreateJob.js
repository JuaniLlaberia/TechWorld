import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { newJob } from '../../api/jobApi';

export const useCreateJob = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: createJob, isLoading: isCreating } = useMutation({
    mutationFn: body => newJob(body),
    onSuccess: data => {
      toast.success('Job created');
      queryClient.invalidateQueries({ queryKey: ['my-jobs'] });
      navigate(`/jobs/all?currentJobId=${data.data.job._id}`);
    },
    onError: err => toast.error(err.message),
  });

  return { createJob, isCreating };
};
