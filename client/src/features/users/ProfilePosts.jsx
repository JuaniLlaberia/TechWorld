import { useGetMyJobs } from '../jobs/useGetMyJobs';
import ProfileJobCard from './ProfileJobCard';
import ItemSkeleton from '../../components/ItemSkeleton';

const ProfilePosts = () => {
  const { myJobs, isLoading } = useGetMyJobs();

  if (isLoading) return <ItemSkeleton amount={5} />;

  return (
    <>
      <ul>
        {myJobs.data.map(job => (
          <ProfileJobCard key={job._id} id={job._id} name={job.name} />
        ))}
      </ul>
    </>
  );
};

export default ProfilePosts;
