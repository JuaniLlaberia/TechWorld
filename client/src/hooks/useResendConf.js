import { useMutation } from '@tanstack/react-query';
import { resendConfEmail } from '../features/auth/authApi';
import toast from 'react-hot-toast';

export const useResendConf = () => {
  const { mutate: sendEmail, isLoading } = useMutation({
    mutationFn: email => resendConfEmail(email),
    onSuccess: () => toast.success('Email was sent'),
    onError: err => toast.error(err.message),
  });

  return { sendEmail, isLoading };
};
