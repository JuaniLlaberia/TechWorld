import { Link } from 'react-router-dom';

const NoJobsCard = ({ link }) => {
  return (
    <section className='h-[75vh] text-center'>
      <h2 className='text-light-2 mt-4 xl:text-xl'>
        Could not find any related job.{' '}
      </h2>
      <Link
        to={link}
        className='text-light-1 font-semibold underline xl:text-xl'
      >
        See more jobs
      </Link>
    </section>
  );
};

export default NoJobsCard;
