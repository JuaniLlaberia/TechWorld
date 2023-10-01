import { useMutation } from '@tanstack/react-query';
import { resetPassword as resetPasswordAPI } from '../../api/authApi';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export const useResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const { mutate: resetPassword, isLoading } = useMutation({
    mutationFn: ({ password, passwordConfirm }) =>
      resetPasswordAPI(password, passwordConfirm, token),
    onSuccess: () => {
      toast.success('Password updated');
      navigate('/login');
    },
    onError: err => toast.error(err.message),
  });

  return { resetPassword, isLoading };
};
