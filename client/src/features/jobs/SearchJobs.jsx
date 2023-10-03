import { useSearchParams } from 'react-router-dom';
import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import JobFilters from './JobFilters';
import JobList from './JobList';
import { useGetJobs } from './useGetJobs';

const SearchJobs = () => {
  const [searchParams] = useSearchParams();
  const { jobs, isLoading } = useGetJobs(searchParams.get('search') || '');

  return (
    <>
      <h1 className='text-light-1 text-xl font-semibold mt-3'>
        All jobs related to '{searchParams.get('search')}'
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
        <h2 className='text-light-2 my-2'>
          Found{' '}
          <span className='text-light-1 font-semibold'>
            {jobs?.data?.jobs.length}
          </span>{' '}
          jobs related
        </h2>
        <JobList
          isLoading={isLoading}
          jobs={jobs?.data?.jobs}
        />
      </section>
    </>
  );
};

export default SearchJobs;
