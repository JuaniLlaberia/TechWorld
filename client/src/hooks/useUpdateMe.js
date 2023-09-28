import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateMe } from '../features/users/usersApi';

export const useUpdateMe = () => {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationFn: newValues => updateMe(newValues),
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
      toast.success('Updated successfully');
    },
    onError: () => toast.error('Fail to update'),
  });

  return { updateProfile, isUpdating };
};
