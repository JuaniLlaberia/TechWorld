import { useGetJobs } from './useGetJobs';
import JobList from './JobList';
import { Link } from 'react-router-dom';

const JobPreviewList = ({ query, showAmount = 5, link }) => {
  const { jobs, isLoading } = useGetJobs(query);

  return (
    <>
      <div className='flex items-center justify-between mb-3 mt-6'>
        <h2 className='text-light-2 text-lg font-semibold xl:text-2xl'>
          Recent jobs
        </h2>
        <Link
          to='/jobs/all'
          className='text-secondary-1 font-semibold hover:underline xl:text-xl'
        >
          View more
        </Link>
      </div>
      <section className='border border-dark-1-border px-2.5 rounded-md'>
        <JobList
          isLoading={isLoading}
          jobs={jobs?.data?.jobs.slice(0, showAmount)}
        />
      </section>
    </>
  );
};

export default JobPreviewList;
