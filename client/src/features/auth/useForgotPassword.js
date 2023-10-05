import { useMutation } from '@tanstack/react-query';
import { forgotPassword } from '../../api/authApi';
import { toast } from 'sonner';

export const useForgotPassword = () => {
  const { mutate: sendForgot, isLoading } = useMutation({
    mutationFn: email => forgotPassword(email),
    onSuccess: () => toast.success('Email was sent'),
    onError: err => toast.error(err.message),
  });

  return { sendForgot, isLoading };
};
