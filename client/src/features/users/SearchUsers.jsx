import { useSearchParams } from 'react-router-dom';
import ItemSkeleton from '../../components/ItemSkeleton';
import Button from '../../components/Button';
import UserListInfinite from './UserListInfinite';
import { useGetUsersInf } from './useGetUsers';

const SearchUsers = () => {
  const [searchParams] = useSearchParams();
  const { users, isFetchingNextPage, fetchNextPage, status, hasNextPage } =
    useGetUsersInf();

  if (status === 'loading') return <ItemSkeleton amount={5} />;

  return (
    <>
      <h1 className='text-light-1 text-xl font-semibold mt-2 mb-6'>
        All users related to '{searchParams.get('searchQuery')}'
      </h1>
      <UserListInfinite
        status={status}
        users={users}
        isFetchingNextPage={isFetchingNextPage}
      />
      {hasNextPage && !isFetchingNextPage && (
        <Button full={true} onClick={fetchNextPage}>
          See more
        </Button>
      )}
    </>
  );
};

export default SearchUsers;
