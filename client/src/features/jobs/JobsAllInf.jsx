import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import JobFilters from './JobFilters';
import { useGetJobsInf } from './useGetJobsInf';
import Button from '../../components/Button';
import JobListInfinite from './JobListInfinite';

const JobsAll = () => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, status } =
    useGetJobsInf('', '', true);

  return (
    <>
      <section className='flex justify-between items-end mb-5'>
        <h1 className='text-light-1 text-xl font-semibold mt-3'>
          All positions
        </h1>
        <FilterBtn>
          <Drawer.Body title='Filter & Sort' windowName='filters-jobs'>
            <JobFilters />
          </Drawer.Body>
        </FilterBtn>
      </section>
      <JobListInfinite
        status={status}
        data={data}
        isFetchingNextPage={isFetchingNextPage}
      />
      {hasNextPage && !isFetchingNextPage && (
        <Button full={true} onClick={fetchNextPage}>
          See more
        </Button>
      )}
    </>
  );
};

export default JobsAll;
