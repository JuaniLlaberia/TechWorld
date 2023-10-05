import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../api/authApi';
import { toast } from 'sonner';

export const useVerifyEmail = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: verify, error } = useMutation({
    mutationFn: token => verifyEmail(token),
    onSuccess: () => {
      queryClient.setQueriesData(['user'], user.data.user);
      toast.success('Account verified');
      navigate('/me');
    },
    onError: error => toast.error(error.message),
  });

  return { verify, error };
};
