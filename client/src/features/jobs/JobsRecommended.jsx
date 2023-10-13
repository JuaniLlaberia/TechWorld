import JobListInfo from './JobListInfo';
import RecommendedList from './RecommendedList';
import { JobPost } from './JobPost';

const JobsRecommended = () => {
  return (
    <>
      <JobListInfo>
        <JobListInfo.List>
          <JobListInfo.ListHead
            title='Recommended for you'
            subTitle='Based on your profile info'
          />
          <RecommendedList />
        </JobListInfo.List>
        <JobListInfo.Content>
          <JobPost />
        </JobListInfo.Content>
      </JobListInfo>
    </>
  );
};

export default JobsRecommended;
