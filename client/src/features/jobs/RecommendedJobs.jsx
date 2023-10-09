import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import { useAuthContext } from '../../context/AuthContext';
import JobFilters from './JobFilters';
import JobListInfinite from './JobListInfinite';
import { useGetJobsInf } from './useGetJobsInf';

const RecommendedJobs = () => {
  const { user } = useAuthContext();

  const queryData = useGetJobsInf(
    user?.data?.profession.split(' ')[0] || '',
    user?.data?.location || ''
  );

  return (
    <>
      <h1 className='text-light-1 text-xl font-semibold mt-3'>
        Recommended for you
      </h1>
      <p className='text-light-2 mb-3 text-sm'>
        Base on your profile profession and location
      </p>
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

export default RecommendedJobs;
