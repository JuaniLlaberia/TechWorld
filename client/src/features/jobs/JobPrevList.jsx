import ItemSkeleton from '../../components/ItemSkeleton';
import JobItemLink from './JobItemLink';

const JobPrevList = ({ jobs, isLoading, itemsLink }) => {
  if (isLoading) return <ItemSkeleton amount={5} />;

  return (
    <ul>
      {jobs.map(job => (
        <JobItemLink item={job} key={job._id} link={itemsLink} />
      ))}
    </ul>
  );
};

export default JobPrevList;
