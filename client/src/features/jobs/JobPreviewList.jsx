import { useGetJobs } from './useGetJobs';
import JobList from './JobList';
import { Link } from 'react-router-dom';

const JobPreviewList = ({ query, showAmount = 5, link }) => {
  const { jobs, isLoading } = useGetJobs(query);

  return (
    <>
      <div className='flex items-center justify-between mb-3 mt-6'>
        <h2 className='text-light-2 text-lg font-semibold'>Recent jobs</h2>
        <Link
          to='/jobs/all'
          className='text-light-2'
        >
          View more
        </Link>
      </div>
      <section className='bg-dark-2 px-3 rounded-md '>
        <JobList
          isLoading={isLoading}
          jobs={jobs?.data?.jobs.slice(0, showAmount)}
        />
      </section>
    </>
  );
};

export default JobPreviewList;
