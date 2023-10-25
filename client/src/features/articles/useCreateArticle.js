import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { createArticle as createArticleApi } from '../../api/articleApi';

export const useCreateArticle = () => {
  const navigate = useNavigate();

  const { mutate: createArticle, isLoading: isCreating } = useMutation({
    mutationFn: body => createArticleApi(body),
    onSuccess: data => {
      toast.success('Successfully created');
      navigate(`/articles/${data?.data._id}`);
    },
    onError: err => toast.error(err.message),
  });

  return { createArticle, isCreating };
};
