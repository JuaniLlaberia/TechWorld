import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateJob as updateJobApi } from '../../api/jobApi';

export const useUpdatejob = () => {
  const queryClient = useQueryClient();

  const { mutate: updateJob, isLoading: isUpdating } = useMutation({
    mutationFn: body => updateJobApi(body),
    onSuccess: () => queryClient.invalidateQueries(['my-jobs']),
    onError: () => toast.error('Something went wrong!'),
  });

  return { updateJob, isUpdating };
};
