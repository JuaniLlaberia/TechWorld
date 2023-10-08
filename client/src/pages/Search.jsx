import { Link, useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import Card from '../components/Card';
import JobList from '../features/jobs/JobList';
import UserList from '../features/users/UserList';
import ItemSkeleton from '../components/ItemSkeleton';
import { useSearchJobs } from '../features/jobs/useSearchJobs';
import { GetUsersByProfession } from '../features/users/useGetusersByProfession';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();

  const { jobs, refetch, isRefetching } = useSearchJobs();
  const {
    users,
    refetch: refetchUsers,
    isRefetching: isRefetchingUsers,
  } = GetUsersByProfession();

  const handleSearch = async e => {
    e.preventDefault();
    if (inputRef.current.value === '') return;

    searchParams.set('searchQuery', inputRef.current.value.trim());
    setSearchParams(searchParams);

    await new Promise(resolve => setTimeout(resolve, 0));

    if (!isRefetching) {
      refetch();
      refetchUsers;
    }
  };

  return (
    <>
      <form
        className='flex justify-center items-center mb-5 w-full relative h-10'
        onSubmit={handleSearch}
      >
        <input
          defaultValue={searchParams.get('searchQuery')}
          placeholder='Search'
          ref={inputRef}
          className='w-full max-w-[400px] h-10 py-2 px-4 rounded-l-full text-light-1 bg-transparent border-[1px] border-light-3 outline-1 outline-light-3 xl:text-lg 2xl:text-xl'
        />
        <button className='h-10 bg-light-1 text-xl text-dark-1 px-3 rounded-r-full lg:text-base xl:text-lg 2xl:text-2xl'>
          <HiOutlineMagnifyingGlass />
        </button>
      </form>

      {isRefetching || isRefetchingUsers ? <ItemSkeleton amount={5} /> : null}

      {jobs && !isRefetching ? (
        <Card>
          <h2 className='text-light-2 font-semibold mb-4'>Jobs</h2>
          <JobList jobs={jobs.data.jobs} />
          {jobs.count > 0 ? (
            <Link
              to={`/jobs-search?searchQuery=${
                inputRef?.current?.value || searchParams.get('searchQuery')
              }`}
              className='text-light-2 flex justify-center pt-4 border-t-[1px] border-dark-1-border lg:text-xl lg:py-3'
            >
              View more
            </Link>
          ) : null}
        </Card>
      ) : null}

      {users && !isRefetchingUsers ? (
        <Card>
          <h2 className='text-light-2 font-semibold mb-4'>People</h2>
          <UserList users={users.data.users} />
          {users.count > 0 ? (
            <Link
              to={`/users-search?searchQuery=${
                inputRef?.current?.value || searchParams.get('searchQuery')
              }`}
              className='text-light-2 flex justify-center pt-4 border-t-[1px] border-dark-1-border lg:text-xl lg:py-3'
            >
              View more
            </Link>
          ) : null}
        </Card>
      ) : null}
    </>
  );
};

export default Search;
