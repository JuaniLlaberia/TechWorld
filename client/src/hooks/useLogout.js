import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutAPI } from '../features/auth/authApi';

export const useLogout = () => {
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
    },
  });

  return { logout, isLoading };
};