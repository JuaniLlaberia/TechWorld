import { useSearchParams } from 'react-router-dom';
import UserListInfinite from './UserListInfinite';
import { useGetUsersInf } from './useGetUsers';

const SearchUsers = () => {
  const [searchParams] = useSearchParams();
  const queryData = useGetUsersInf();

  return (
    <section className='bg-dark-2 rounded-md'>
      <h1 className='text-light-1 text-lg font-semibold rounded-md mb-3 py-3 px-2 bg-secondary-1 xl:text-xl'>
        All users related to '{searchParams.get('searchQuery')}'
      </h1>
      <UserListInfinite queryData={queryData} />
    </section>
  );
};

export default SearchUsers;
