import ItemSkeleton from '../../components/ItemSkeleton';
import JobItemLink from './JobItemLink';

const JobPrevList = ({ jobs, isLoading, itemsLink }) => {
  if (isLoading) return <ItemSkeleton amount={5} />;

  if (jobs?.length === 0)
    return (
      <section>
        <h2 className='text-light-2 mt-4 pb-4 lg:text-lg'>
          Could not find any job.
        </h2>
      </section>
    );

  return (
    <ul>
      {jobs?.map(job => (
        <JobItemLink item={job} key={job._id} link={itemsLink} />
      ))}
    </ul>
  );
};

export default JobPrevList;
