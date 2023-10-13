import { useSearchParams } from 'react-router-dom';
import JobsInfinite from './JobsInfinite';
import JobListInfo from './JobListInfo';
import { useGetJobsInf } from './useGetJobsInf';
import { JobPost } from './JobPost';

const SearchJobs = () => {
  const [searchParams] = useSearchParams();
  const queryData = useGetJobsInf(
    searchParams.get('searchQuery') || '',
    '',
    true
  );

  return (
    <>
      <JobListInfo>
        <JobListInfo.List>
          <JobListInfo.ListHead
            title={`Your search for '${searchParams.get('searchQuery')}'`}
          />
          <JobsInfinite queryData={queryData} />
        </JobListInfo.List>
        <JobListInfo.Content>
          <JobPost />
        </JobListInfo.Content>
      </JobListInfo>
    </>
  );
};

export default SearchJobs;
