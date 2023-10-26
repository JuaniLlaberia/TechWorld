import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteJob as deleteJobApi } from '../../api/jobApi';
import { toast } from 'sonner';

export const useDeleteJob = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteJob, isLoadding: isDeleting } = useMutation({
    mutationFn: id => deleteJobApi(id),
    onSuccess: () => {
      toast.success('Deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['my-jobs'] });
    },
  });

  return { deleteJob, isDeleting };
};
