import { useSearchParams } from 'react-router-dom';
import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import Pagination from '../../components/Pagination';
import JobFilters from './JobFilters';
import JobList from './JobList';
import { useGetJobs } from './useGetJobs';

const SearchJobs = () => {
  const [searchParams] = useSearchParams();
  const { jobs, isLoading } = useGetJobs(searchParams.get('searchQuery') || '');

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
        <JobList
          isLoading={isLoading}
          jobs={jobs?.data?.jobs}
        />
      </section>
      <Pagination totalDocs={jobs?.count} />
    </>
  );
};

export default SearchJobs;
