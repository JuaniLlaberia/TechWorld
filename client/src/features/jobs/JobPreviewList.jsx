import { useGetJobs } from '../../hooks/useGetJobs';
import JobItem from '../../components/JobItem';
import testImg from '/default.jpg';

const JobPreviewList = () => {
  const { jobs, isLoading } = useGetJobs();

  if (isLoading) return <h1>Is Loading</h1>;

  return (
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
  );
};

export default JobPreviewList;