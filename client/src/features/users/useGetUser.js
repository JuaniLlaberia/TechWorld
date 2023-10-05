import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/usersApi';

export const useGetUser = () => {
  const { id } = useParams();

  const { data: user, isLoading } = useQuery({
    queryFn: () => getUser(id),
    queryKey: ['user-search', id],
  });

  return { isLoading, user };
};
