import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { login as loginApi } from '../features/auth/authApi';

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: () => {
      toast.success('Welcome back!');
      navigate('/');
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { login, isLoading };
};
