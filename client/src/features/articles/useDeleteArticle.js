import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteArticle as deleteArticleApi } from '../../api/articleApi';

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteArticle, isLoading } = useMutation({
    mutationFn: id => deleteArticleApi(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['my-articles'] }),
  });

  return { deleteArticle, isLoading };
};
