import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { unSaveJob } from '../../api/jobApi';

export const useUnSaveJob = () => {
  const queryClient = useQueryClient();

  const { mutate: unSave, isLoading: isUnSaving } = useMutation({
    mutationFn: id => unSaveJob(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['saved-jobs']);
      queryClient.invalidateQueries(['user']);
    },
    onError: () => toast.error('Something went wrong'),
  });

  return { unSave, isUnSaving };
};
