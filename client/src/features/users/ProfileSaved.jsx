import { useGetMySaved } from './useGetMySaved';
import JobList from '../jobs/JobList';
import Card from '../../components/Card';

const ProfileSaved = () => {
  const { jobs, isLoading } = useGetMySaved();

  return (
    <>
      <Card>
        <h1 className='text-light-2 text-lg font-semibold border-b border-light-3 pb-2 mb-1 xl:text-2xl xl:pb-5'>
          Saved jobs
        </h1>
        <JobList
          jobs={jobs?.data?.savedPosts}
          isLoading={isLoading}
        />
        <p className='text-light-1'>Add pagination or infinite scroll</p>
      </Card>
    </>
  );
};

export default ProfileSaved;
