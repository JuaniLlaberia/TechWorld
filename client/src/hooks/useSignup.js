import { useMutation } from '@tanstack/react-query';
import { signup as signupAPI } from '../features/auth/authApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: values => signupAPI(values),
    onSuccess: () => {
      toast.success('Created successfully');
      navigate('/confirm-email');
    },
    onError: err => toast.error(err.message),
  });

  return { signup, isLoading };
};
