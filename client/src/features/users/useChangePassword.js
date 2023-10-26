import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changepassword as changePasswordApi } from '../../api/authApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const useChangePassword = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: changePassword, isLoading } = useMutation({
    mutationFn: body => changePasswordApi(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      navigate('/login');
      toast.success('Updated successfully');
    },
    onError: err => toast.error(err.mesage),
  });

  return { changePassword, isLoading };
};
