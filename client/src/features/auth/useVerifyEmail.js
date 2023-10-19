import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../api/authApi';
import { toast } from 'sonner';

export const useVerifyEmail = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: verify,
    error,
    isLoading,
  } = useMutation({
    mutationFn: token => verifyEmail(token),
    onSuccess: data => {
      queryClient.setQueriesData(['user'], data.data.user);
      toast.success('Account verified');
      navigate('/me/information');
    },
    onError: error => toast.error(error.message),
  });

  return { verify, error, isLoading };
};
