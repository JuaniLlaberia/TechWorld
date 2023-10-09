import { useSearchParams } from 'react-router-dom';
import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import JobFilters from './JobFilters';
import JobListInfinite from './JobListInfinite';
import { useGetJobsInf } from './useGetJobsInf';

const SearchJobs = () => {
  const [searchParams] = useSearchParams();
  const queryData = useGetJobsInf(
    searchParams.get('searchQuery') || '',
    '',
    true
  );

  return (
    <>
      <h1 className='text-light-1 text-xl font-semibold mt-3'>
        All jobs related to '{searchParams.get('searchQuery')}'
      </h1>
      <section className='flex justify-end'>
        <FilterBtn>
          <Drawer.Body
            title='Filter & Sort'
            windowName='filters-jobs'
          >
            <JobFilters />
          </Drawer.Body>
        </FilterBtn>
      </section>
      <section>
        <JobListInfinite queryData={queryData} />
      </section>
    </>
  );
};

export default SearchJobs;
