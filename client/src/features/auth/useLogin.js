import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { login as loginApi } from '../../api/authApi';

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: user => {
      queryClient.setQueriesData(['user'], user.data.user);
      toast.success('Welcome back!');
      navigate('/');
    },
    onError: err => toast.error(err.message),
  });

  return { login, isLoading };
};
