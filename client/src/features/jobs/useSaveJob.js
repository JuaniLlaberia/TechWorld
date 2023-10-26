import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { saveJob } from '../../api/jobApi';

export const useSaveJob = () => {
  const queryClient = useQueryClient();

  const { mutate: save } = useMutation({
    mutationFn: id => saveJob(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['saved-jobs'] });
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: () => toast.error('Something went wrong'),
  });

  return { save };
};
