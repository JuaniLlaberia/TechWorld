import { useMutation } from '@tanstack/react-query';
import { signup as signupAPI } from '../../api/authApi';
import { toast } from 'sonner';

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: values => signupAPI(values),
    onSuccess: () => toast.success('Verification email sent'),
    onError: err => toast.error(err.message),
  });

  return { signup, isLoading };
};
