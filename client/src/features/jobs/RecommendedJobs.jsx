import Drawer from '../../components/Drawer';
import FilterBtn from '../../components/FilterBtn';
import Pagination from '../../components/Pagination';
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
          <Drawer.Body title='Filter & Sort' windowName='filters-jobs'>
            <JobFilters />
          </Drawer.Body>
        </FilterBtn>
      </section>
      <section>
        <JobList isLoading={isLoading} jobs={jobs?.data?.jobs} />
      </section>
      <Pagination totalDocs={jobs?.count} />
    </>
  );
};

export default RecommendedJobs;
