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
      <section className='relative mb-7'>
        <h1 className='text-light-1 text-xl font-semibold mt-3 xl:text-3xl'>
          Recommended for you
        </h1>
        <p className='text-light-2 mb-3 text-sm xl:text-lg'>
          Base on your profile profession and location
        </p>
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

export default RecommendedJobs;
