import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutAPI } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      navigate('/');
    },
  });

  return { logout, isLoading };
};
