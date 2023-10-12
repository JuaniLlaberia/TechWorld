import JobListInfinite from './JobListInfinite';
import JobFilters from './JobFilters';
import FilterBtn from '../../components/FilterBtn';
import { Drawer } from '../../components/Drawer';
import { useGetJobsInf } from './useGetJobsInf';

const JobListSide = () => {
  const queryData = useGetJobsInf('', '', true);

  return (
    <>
      <header className='bg-secondary-1 py-2 px-4 rounded-t-md md:rounded-tl-md flex items-center justify-between'>
        <div>
          <h1 className='text-light-1 text-xl font-semibold xl:text-3xl'>
            All positions
          </h1>
          <h2 className='text-light-2 mb-3 xl:text-lg'>
            Found {queryData.data?.pages[0].count} results
          </h2>
        </div>
        <FilterBtn>
          <Drawer.Body
            title='Filter & Sort'
            windowName='filters-jobs'
          >
            <JobFilters />
          </Drawer.Body>
        </FilterBtn>
      </header>
      <JobListInfinite queryData={queryData} />
    </>
  );
};

export default JobListSide;
