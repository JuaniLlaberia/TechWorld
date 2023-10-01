import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import JobFilters from './JobFilters';
import JobList from './JobList';
import { useGetJobs } from './useGetJobs';

const JobsAll = () => {
  const { jobs, isLoading } = useGetJobs();

  if (isLoading) return <h1>Is Loading</h1>;

  return (
    <>
      <section className='flex justify-between items-end mb-5'>
        <h1 className='text-light-1 text-xl font-semibold mt-3'>
          All position
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
        <h2 className='text-light-2 my-2'>
          Results:{' '}
          <span className='text-light-1 font-semibold'>
            {jobs?.data?.jobs.length}
          </span>{' '}
          positions
        </h2>
        <JobList jobs={jobs?.data?.jobs} />
      </section>
    </>
  );
};

export default JobsAll;
