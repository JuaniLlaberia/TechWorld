import { JobPost } from './JobPost';
import JobListInfo from './JobListInfo';
import JobsAllList from './JobsAllList';

const JobsAll = () => {
  return (
    <JobListInfo>
      <JobListInfo.List>
        <JobListInfo.ListHead title='All positions' />
        <JobsAllList />
      </JobListInfo.List>
      <JobListInfo.Content>
        <JobPost />
      </JobListInfo.Content>
    </JobListInfo>
  );
};

export default JobsAll;
