import { useGetJobs } from './useGetJobs';
import JobList from './JobList';
import { Link } from 'react-router-dom';

const JobPreviewList = () => {
  const { jobs, isLoading } = useGetJobs();

  if (isLoading) return <h1>Is Loading</h1>;

  return (
    <section className='bg-dark-2 p-2 rounded-md'>
      <JobList jobs={jobs.data.jobs.slice(0, 5)} />
      <Link
        to='/jobs/all'
        className='text-light-2 flex justify-center py-1.5 border-t-[1px] border-dark-1-border lg:text-xl lg:py-3'
      >
        View more
      </Link>
    </section>
  );
};

export default JobPreviewList;
