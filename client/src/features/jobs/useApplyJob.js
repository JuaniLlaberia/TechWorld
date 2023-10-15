import { useMutation } from '@tanstack/react-query';
import { applyJob } from '../../api/jobApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const useApplyJob = () => {
  const navigate = useNavigate();

  const { mutate: apply, isLoading } = useMutation({
    mutationFn: body => applyJob(body),
    onSuccess: () => {
      navigate(-1);
      toast.success('Application sent');
    },
    onError: () => toast.error('Something went wrong. Try again!'),
  });

  return { apply, isLoading };
};
