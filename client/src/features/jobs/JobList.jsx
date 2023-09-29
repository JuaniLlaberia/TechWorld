import { useGetJobs } from '../../hooks/useGetJobs';
import JobItem from '../../components/JobItem';
import testImg from '/default.jpg';

const JobList = () => {
  const { jobs, isLoading } = useGetJobs();

  if (isLoading) return <h1>Is Loading</h1>;

  return (
    <>
      <h2 className='text-light-2 my-2'>
        Found <span className='text-light-1 font-semibold'>{jobs.count}</span>{' '}
        jobs related
      </h2>
      <ul>
        {jobs.data.jobs.map(job => (
          <JobItem
            key={job._id}
            id={job._id}
            img={testImg}
            title={job.name}
            location={job.location}
            company='X Company'
          />
        ))}
      </ul>
      <button>View more</button>
    </>
  );
};

export default JobList;
