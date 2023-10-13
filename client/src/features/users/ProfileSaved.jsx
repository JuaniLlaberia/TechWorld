import JobPrevList from '../jobs/JobPrevList';
import Card from '../../components/Card';
import { useGetMySaved } from './useGetMySaved';

const ProfileSaved = () => {
  const { jobs, isLoading } = useGetMySaved();

  return (
    <>
      <Card>
        <JobPrevList
          jobs={jobs?.data?.savedPosts}
          isLoading={isLoading}
          itemsLink='/jobs?currentJobId='
        />
      </Card>
    </>
  );
};

export default ProfileSaved;
