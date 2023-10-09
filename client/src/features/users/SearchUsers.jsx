import { useSearchParams } from 'react-router-dom';
import UserListInfinite from './UserListInfinite';
import { useGetUsersInf } from './useGetUsers';

const SearchUsers = () => {
  const [searchParams] = useSearchParams();
  const queryData = useGetUsersInf();

  return (
    <>
      <h1 className='text-light-1 text-xl font-semibold mt-2 mb-6'>
        All users related to '{searchParams.get('searchQuery')}'
      </h1>
      <UserListInfinite queryData={queryData} />
    </>
  );
};

export default SearchUsers;
