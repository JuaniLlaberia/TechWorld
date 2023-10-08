import { Link } from 'react-router-dom';
import { useGetJobs } from './useGetJobs';
import JobList from './JobList';

const JobPreviewList = ({ query, showAmount = 5, link }) => {
  const { jobs, isLoading } = useGetJobs(query);

  return (
    <section className='bg-dark-2 p-2 rounded-md '>
      <JobList
        isLoading={isLoading}
        jobs={jobs?.data?.jobs.slice(0, showAmount)}
      />
      <Link
        to={link || '/jobs/all'}
        className='text-light-2 flex justify-center py-1.5 border-t-[1px] border-dark-1-border lg:text-xl lg:py-3'
      >
        View more
      </Link>
    </section>
  );
};

export default JobPreviewList;
