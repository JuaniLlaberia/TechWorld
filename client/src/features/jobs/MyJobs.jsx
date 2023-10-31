import { useGetMyJobs } from './useGetMyJobs';
import MyJobCard from './MyJobsCard';
import ItemSkeleton from '../../components/ItemSkeleton';
import { Link } from 'react-router-dom';
import { HiOutlinePlus } from 'react-icons/hi2';

const MyJobs = () => {
  const { myJobs, isLoading } = useGetMyJobs();

  if (isLoading) return <ItemSkeleton amount={5} />;

  return (
    <>
      <header className='flex justify-between mb-5'>
        <h1 className='text-light-1 text-2xl'>Your jobs</h1>
        <Link
          to='/new'
          className='flex items-center text-light-1 gap-1 bg-secondary-1 border border-dark-1-border rounded-md py-1 px-3 text-xl'
        >
          <HiOutlinePlus />
          <span className='text-base'>New</span>
        </Link>
      </header>
      {myJobs.count > 0 ? (
        <ul>
          {myJobs.data.map(job => (
            <MyJobCard
              key={job._id}
              id={job._id}
              job={job}
            />
          ))}
        </ul>
      ) : (
        <h1 className='text-light-2 text-center text-xl py-3'>
          You have no jobs. You can start creating new ones.
        </h1>
      )}
    </>
  );
};

export default MyJobs;
