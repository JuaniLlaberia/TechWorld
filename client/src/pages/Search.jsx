import { Link, useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import Card from '../components/Card';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useSearchJobs } from '../features/jobs/useSearchJobs';
import JobList from '../features/jobs/JobList';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();
  const { jobs, refetch, isRefetching } = useSearchJobs();

  const handleSearch = async e => {
    e.preventDefault();
    if (inputRef.current.value === '') return;

    searchParams.set('searchQuery', inputRef.current.value.trim());
    setSearchParams(searchParams);

    await new Promise(resolve => setTimeout(resolve, 0));

    if (!isRefetching) refetch();
  };

  return (
    <>
      <form
        className='flex items-center gap-3 mb-5'
        onSubmit={handleSearch}
      >
        <input
          placeholder='Search'
          ref={inputRef}
          className='w-full max-w-[400px] py-1 px-2 rounded-md text-light-1 bg-transparent border-[1px] border-light-3 outline-1 outline-light-3'
        />
        <button className='bg-light-1 text-xl text-dark-1 flex items-center gap-2 px-3 py-1.5 rounded-md lg:text-base'>
          <HiOutlineMagnifyingGlass />
          <span className='hidden lg:block'>Search</span>
        </button>
      </form>

      {isRefetching ? <p className='text-light-1'>Loading...</p> : null}
      {jobs && !isRefetching ? (
        <Card>
          <h2 className='text-light-2 font-semibold mb-4'>Jobs</h2>
          <JobList jobs={jobs.data.jobs} />
          {jobs.count > 0 ? (
            <Link
              to={`/jobs-search?search=${inputRef.current.value}`}
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
