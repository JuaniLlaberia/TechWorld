import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import JobFilters from './JobFilters';
import JobListInfinite from './JobListInfinite';
import { useGetJobsInf } from './useGetJobsInf';

const JobsAll = () => {
  const queryData = useGetJobsInf('', '', true);

  return (
    <>
      <section className='relative mb-7'>
        <h1 className='text-light-1 text-xl font-semibold mt-3 xl:text-3xl'>
          All positions
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
      <JobListInfinite queryData={queryData} />
    </>
  );
};

export default JobsAll;
