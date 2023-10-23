import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import JobPrevList from '../features/jobs/JobPrevList';
import UserList from '../features/users/UserList';
import ItemSkeleton from '../components/ItemSkeleton';
import SearchCard from '../components/SearchCard';
import { useSearchByQuery } from '../features/users/useSearchByQuery';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();

  const {
    data,
    refetch: refetchTest,
    isRefetching: isRefetcibgTest,
  } = useSearchByQuery();

  const handleSearch = async e => {
    e.preventDefault();
    if (inputRef.current.value === '') return;

    searchParams.set('searchQuery', inputRef.current.value.trim());
    setSearchParams(searchParams);

    await new Promise(resolve => setTimeout(resolve, 0));

    if (!isRefetcibgTest) {
      refetchTest();
    }
  };

  return (
    <section className='pb-20'>
      <form
        className='flex justify-center items-center mb-6 w-full relative h-10 xl:h-14 xl:mt-2'
        onSubmit={handleSearch}
      >
        <input
          defaultValue={searchParams.get('searchQuery')}
          placeholder='Search'
          ref={inputRef}
          className='w-full max-w-[600px] h-10 py-2 px-4 rounded-l-full text-light-1 bg-transparent border-[1px] border-light-3 outline-1 outline-light-3 xl:text-lg 2xl:text-xl xl:h-14'
        />
        <button
          aria-label='search'
          className='flex items-center gap-2 h-10 bg-light-1 text-xl text-dark-1 px-3 rounded-r-full lg:text-base xl:text-lg 2xl:text-2xl xl:h-14 xl:px-6'
        >
          <HiOutlineMagnifyingGlass />{' '}
          <span className='hidden xl:block'>Search</span>
        </button>
      </form>

      {isRefetcibgTest ? <ItemSkeleton amount={5} /> : null}

      {data?.jobs && !isRefetcibgTest ? (
        <SearchCard
          title='Jobs'
          link={`/jobs-search?searchQuery=${
            inputRef?.current?.value || searchParams.get('searchQuery')
          }`}
        >
          <JobPrevList
            isLoading={isRefetcibgTest}
            jobs={data?.jobs?.data?.jobs}
            itemsLink={`/jobs-search?searchQuery=${searchParams.get(
              'searchQuery'
            )}&currentJobId=`}
          />
        </SearchCard>
      ) : null}

      {data?.users && !isRefetcibgTest ? (
        <SearchCard
          title='People'
          link={`/users-search?searchQuery=${
            inputRef?.current?.value || searchParams.get('searchQuery')
          }`}
        >
          <UserList users={data?.users?.data?.users} />
        </SearchCard>
      ) : null}
    </section>
  );
};

export default Search;
