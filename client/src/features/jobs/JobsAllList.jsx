import JobListInfinite from './JobsInfinite';
import { useGetJobsInf } from './useGetJobsInf';

const JobsAllList = () => {
  const queryData = useGetJobsInf('', '', true);

  return <JobListInfinite queryData={queryData} />;
};

export default JobsAllList;
