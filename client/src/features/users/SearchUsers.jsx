import { useSearchParams } from 'react-router-dom';
import UserList from './UserList';
import { useGetUsers } from './useGetUsers';
import Pagination from '../../components/Pagination';

const SearchUsers = () => {
  const [searchParams] = useSearchParams();
  const { users, isLoading } = useGetUsers();

  return (
    <>
      <h1 className='text-light-1 text-xl font-semibold mt-2 mb-6'>
        All users related to '{searchParams.get('searchQuery')}'
      </h1>
      <section>
        <UserList
          isLoading={isLoading}
          users={users?.data?.users}
        />
      </section>
      <Pagination totalDocs={users?.count} />
    </>
  );
};

export default SearchUsers;
