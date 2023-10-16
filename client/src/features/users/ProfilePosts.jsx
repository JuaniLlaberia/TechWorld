import { useGetMyJobs } from '../jobs/useGetMyJobs';
import ProfileJobCard from './ProfileJobCard';
import ItemSkeleton from '../../components/ItemSkeleton';

const ProfilePosts = () => {
  const { myJobs, isLoading } = useGetMyJobs();

  if (isLoading) return <ItemSkeleton amount={5} />;

  if (myJobs.count === 0)
    return (
      <h1 className='text-light-2 text-center text-xl py-3'>
        You have no jobs. You can start creating new ones.
      </h1>
    );

  return (
    <>
      <ul>
        {myJobs.data.map(job => (
          <ProfileJobCard
            key={job._id}
            id={job._id}
            job={job}
          />
        ))}
      </ul>
    </>
  );
};

export default ProfilePosts;
