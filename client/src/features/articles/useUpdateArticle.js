import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateArticle } from '../../api/articleApi';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

export const useUpdateArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: editArticle, isLoading } = useMutation({
    mutationFn: newObj => updateArticle({ id, newObj }),
    onSuccess: () => {
      toast.success('Edited successfully');
      queryClient.invalidateQueries({ queryKey: ['articles', id] });
      navigate(`/articles/${id}`);
    },
    onError: err => toast.error(err.message),
  });

  return { editArticle, isLoading };
};
