import JobsInfinite from './JobsInfinite';
import { useAuthContext } from '../../context/AuthContext';
import { useGetJobsInf } from './useGetJobsInf';

const RecommendedList = () => {
  const { user } = useAuthContext();

  const queryData = useGetJobsInf(
    user?.data?.profession.split(' ')[0] || '',
    user?.data?.location || ''
  );
  return <JobsInfinite queryData={queryData} />;
};

export default RecommendedList;
