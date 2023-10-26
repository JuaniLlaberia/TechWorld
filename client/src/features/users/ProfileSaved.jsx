import JobPrevList from '../jobs/JobPrevList';
import { useGetMySaved } from './useGetMySaved';

const ProfileSaved = () => {
  const { jobs, isLoading } = useGetMySaved();

  return (
    <>
      <section className='border border-dark-1-border rounded-sm px-2 bg-dark-2'>
        <JobPrevList
          jobs={jobs?.data?.savedPosts}
          isLoading={isLoading}
          itemsLink='/jobs?currentJobId='
        />
      </section>
    </>
  );
};

export default ProfileSaved;
