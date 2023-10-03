import { useSearchParams } from 'react-router-dom';
import UserList from './UserList';
import { useGetUsers } from './useGetUsers';

const SearchUsers = () => {
  const [searchParams] = useSearchParams();
  const { users, isLoading } = useGetUsers();

  return (
    <>
      <h1 className='text-light-1 text-xl font-semibold mt-2 mb-6'>
        All users related to '{searchParams.get('searchQuery')}'
      </h1>
      <h2 className='text-light-2 my-2'>
        Found{' '}
        <span className='text-light-1 font-semibold'>
          {users?.data?.users.length}
        </span>{' '}
        users
      </h2>
      <section>
        <UserList
          isLoading={isLoading}
          users={users?.data?.users}
        />
      </section>
    </>
  );
};

export default SearchUsers;
