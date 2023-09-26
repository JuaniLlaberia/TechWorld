import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { verifyEmail } from '../features/auth/authApi';
import toast from 'react-hot-toast';

export const useVerifyEmail = () => {
  const navigate = useNavigate();

  const { mutate: verify, error } = useMutation({
    mutationFn: token => verifyEmail(token),
    onSuccess: () => {
      toast.success('Account verified');
      navigate('/me');
    },
    onError: error => toast.error(error.message),
  });

  return { verify, error };
};
