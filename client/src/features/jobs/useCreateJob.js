import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { newJob } from '../../api/jobApi';

export const useCreateJob = () => {
  const navigate = useNavigate();

  const { mutate: createJob, isLoading: isCreating } = useMutation({
    mutationFn: body => newJob(body),
    onSuccess: data => {
      toast.success('Job created');
      navigate(`/job/${data.data.job._id}`);
    },
    onError: err => toast.error(err.message),
  });

  return { createJob, isCreating };
};
