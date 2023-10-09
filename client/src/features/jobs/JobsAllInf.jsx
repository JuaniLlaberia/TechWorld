import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import JobFilters from './JobFilters';
import { useGetJobsInf } from './useGetJobsInf';
import JobListInfinite from './JobListInfinite';

const JobsAll = () => {
  const queryData = useGetJobsInf('', '', true);

  return (
    <>
      <section className='flex justify-between items-end mb-6'>
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
      <JobListInfinite queryData={queryData} />
    </>
  );
};

export default JobsAll;
