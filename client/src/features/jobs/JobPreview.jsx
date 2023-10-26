import { Link } from 'react-router-dom';
import JobPrevList from './JobPrevList';
import { useGetJobs } from './useGetJobs';

const JobPreview = ({ query, showAmount = 5 }) => {
  const { jobs, isLoading } = useGetJobs(query);

  return (
    <>
      <section className='flex items-center justify-between mb-3 mt-6'>
        <h2 className='text-light-2 text-lg font-semibold xl:text-2xl'>
          Recent jobs
        </h2>
        <Link
          to='/jobs/all'
          className='text-secondary-1 font-semibold hover:underline xl:text-xl'
        >
          View more
        </Link>
      </section>
      <section className='border border-dark-1-border px-2.5 rounded-md mb-20'>
        <JobPrevList
          isLoading={isLoading}
          jobs={jobs?.data?.jobs.slice(0, showAmount)}
          itemsLink='/jobs/all?currentJobId='
        />
      </section>
    </>
  );
};

export default JobPreview;
