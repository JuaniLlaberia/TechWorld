import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateMe } from '../../api/usersApi';

export const useUpdateMe = () => {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationFn: newValues => updateMe(newValues),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('Updated successfully');
    },
    onError: () => toast.error('Fail to update'),
  });

  return { updateProfile, isUpdating };
};
