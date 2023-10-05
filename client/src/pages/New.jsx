import { Link } from 'react-router-dom';
import { HiOutlineXMark } from 'react-icons/hi2';
import JobsForm from '../features/jobs/JobsForm';

const New = () => {
  return (
    <>
      <Link
        to='/'
        className='absolute left-0 pb-2.5 px-3 text-light-1 font-semibold flex items-center gap-2 w-full border-b border-light-3'
      >
        <HiOutlineXMark />
        Close
      </Link>
      <h1 className='text-light-1 text-xl font-semibold mt-10'>
        Create a new job offer
      </h1>
      <JobsForm />
    </>
  );
};

export default New;
