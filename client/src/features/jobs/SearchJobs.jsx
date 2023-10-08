import { useSearchParams } from 'react-router-dom';
import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import JobFilters from './JobFilters';
import { useGetJobsInf } from './useGetJobsInf';
import JobListInfinite from './JobListInfinite';
import Button from '../../components/Button';

const SearchJobs = () => {
  const [searchParams] = useSearchParams();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, status } =
    useGetJobsInf(searchParams.get('searchQuery') || '', '', true);

  return (
    <>
      <h1 className='text-light-1 text-xl font-semibold mt-3'>
        All jobs related to '{searchParams.get('searchQuery')}'
      </h1>
      <section className='flex justify-end'>
        <FilterBtn>
          <Drawer.Body title='Filter & Sort' windowName='filters-jobs'>
            <JobFilters />
          </Drawer.Body>
        </FilterBtn>
      </section>
      <section>
        <JobListInfinite
          status={status}
          data={data}
          isFetchingNextPage={isFetchingNextPage}
        />
      </section>
      {hasNextPage && !isFetchingNextPage && (
        <Button full={true} onClick={fetchNextPage}>
          See more
        </Button>
      )}
    </>
  );
};

export default SearchJobs;
