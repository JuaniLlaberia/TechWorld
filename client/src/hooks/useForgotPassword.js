import { useMutation } from '@tanstack/react-query';
import { forgotPassword } from '../features/auth/authApi';
import toast from 'react-hot-toast';

export const useForgotPassword = () => {
  const { mutate: sendForgot, isLoading } = useMutation({
    mutationFn: email => forgotPassword(email),
    onSuccess: () => toast.success('Email was sent'),
    onError: err => toast.error(err.message),
  });

  return { sendForgot, isLoading };
};
