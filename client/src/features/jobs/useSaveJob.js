import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { saveJob } from '../../api/jobApi';

export const useSaveJob = () => {
  const queryClient = useQueryClient();

  const { mutate: save, isLoading: isSaving } = useMutation({
    mutationFn: id => saveJob(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['saved-jobs']);
      queryClient.invalidateQueries(['user']);
    },
    onError: () => toast.error('Something went wrong'),
  });

  return { save, isSaving };
};
