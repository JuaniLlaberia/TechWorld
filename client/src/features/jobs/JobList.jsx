import ItemSkeleton from '../../components/ItemSkeleton';
import JobItem from './JobItem';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, isLoading }) => {
  if (isLoading) return <ItemSkeleton amount={5} />;

  return (
    <>
      {jobs?.length > 0 ? (
        <ul className='last-of-type:border-0'>
          {jobs.map(job => (
            <JobItem
              item={job}
              key={job._id}
            />
          ))}
        </ul>
      ) : (
        <section>
          <h2 className='text-light-1 mt-4'>
            Could not find any related job based on your search.{' '}
            <Link
              to='/jobs/all'
              className='font-semibold underline'
            >
              See more jobs
            </Link>
          </h2>
        </section>
      )}
    </>
  );
};

export default JobList;
