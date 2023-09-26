import { useMutation } from '@tanstack/react-query';
import { signup as signupAPI } from '../features/auth/authApi';
import toast from 'react-hot-toast';

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: values => signupAPI(values),
    onSuccess: () => toast.success('Created successfully'),
    onError: err => toast.error(err.message),
  });

  return { signup, isLoading };
};
