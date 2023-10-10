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
      <section className='relative mb-7'>
        <h1 className='text-light-1 text-xl font-semibold mt-3 xl:text-3xl'>
          All jobs related to '{searchParams.get('searchQuery')}'
        </h1>
        <div className='absolute top-0 right-0'>
          <FilterBtn>
            <Drawer.Body
              title='Filter & Sort'
              windowName='filters-jobs'
            >
              <JobFilters />
            </Drawer.Body>
          </FilterBtn>
        </div>
      </section>
      <section>
        <JobListInfinite queryData={queryData} />
      </section>
    </>
  );
};

export default SearchJobs;
