import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import Pagination from '../../components/Pagination';
import JobFilters from './JobFilters';
import JobList from './JobList';
import { useGetJobs } from './useGetJobs';

const JobsAll = () => {
  const { jobs, isLoading } = useGetJobs();

  return (
    <>
      <section className='flex justify-between items-end mb-5'>
        <h1 className='text-light-1 text-xl font-semibold mt-3'>
          All positions
        </h1>
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

export default JobsAll;
