import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import { useAuthContext } from '../../context/AuthContext';
import JobFilters from './JobFilters';
import JobList from './JobList';
import { useGetJobs } from './useGetJobs';

const RecommendedJobs = () => {
  const { user } = useAuthContext();

  const { jobs, isLoading } = useGetJobs(
    user?.data?.profession.split(' ')[0] || '',
    user?.data?.location || ''
  );

  if (isLoading) return <h1>Is Loading</h1>;

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
        <h2 className='text-light-2 my-2'>
          Found{' '}
          <span className='text-light-1 font-semibold'>
            {jobs?.data?.jobs.length}
          </span>{' '}
          jobs related
        </h2>
        <JobList jobs={jobs?.data?.jobs} />
      </section>
    </>
  );
};

export default RecommendedJobs;
