import {
  HiBriefcase,
  HiBuildingOffice2,
  HiCalendarDays,
  HiOutlineArrowLeft,
  HiOutlineArrowTopRightOnSquare,
} from 'react-icons/hi2';
import { Link, useSearchParams } from 'react-router-dom';
import PostSkeleton from '../../components/PostSkeleton';
import SavePost from '../../components/SavePost';
import { useGetJob } from './useGetJob';

export const JobPost = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClose = () => {
    searchParams.set('currentJobId', '');
    setSearchParams(searchParams);
  };

  const { job, isLoading } = useGetJob();

  if (isLoading) return <PostSkeleton />;

  const {
    _id,
    name,
    level,
    location,
    description,
    type,
    workPlace,
    user,
    applicationUs,
    companyUrl,
  } = job.data.job;

  return (
    <section className='p-2 md:rounded-r-md w-full lg:w-[40vw] xl:w-[25vw]'>
      <button
        className='text-light-1 block pb-2 bg-transparent md:hidden'
        onClick={handleClose}
      >
        <HiOutlineArrowLeft size={25} />
      </button>
      <section className='py-2 px-2 rounded-md overflow-y-scroll pb-32 h-[100vh] scrollbar-thin scrollbar-thumb-light-2 scrollbar-track-transparent hover:scrollbar-thumb-light-1 md:h-[90vh] md:pb-2'>
        <h1 className='text-light-1 text-2xl font-semibold mb-1 xl:text-4xl'>
          {name}
        </h1>
        <h2 className='text-light-2 mb-2 xl:text-lg'>
          {location} ({workPlace})
        </h2>

        <div className='flex items-center justify-start gap-2 mb-1'>
          <img
            src={user?.image}
            className='w-8 h-8 rounded-full bg-light-3 xl:w-10 xl:h-10'
            alt='profile picture'
          />
          <Link
            to={`/user/${user?._id}`}
            className='text-light-2 text-sm font-semibold hover:underline lg:text-base 2xl:text-lg'
          >
            {user?.fullName}
          </Link>
        </div>

        <div className='flex justify-end items-center gap-3 my-3 mt-6'>
          <Link
            to={applicationUs ? `/apply/${_id}` : companyUrl}
            className='bg-light-1 text-dark-1 py-1 px-4 rounded-md font-semibold lg:py-2 lg:px-6'
          >
            {applicationUs ? (
              'Apply now'
            ) : (
              <span className='flex items-center gap-2'>
                Apply
                <HiOutlineArrowTopRightOnSquare size={22} />
              </span>
            )}
          </Link>
          <SavePost id={_id} />
        </div>

        <h3 className='text-light-2 text-lg font-semibold border-t border-light-3 py-3 xl:text-xl'>
          Details
        </h3>
        <ul className='text-light-1 '>
          <li className='flex items-center gap-1.5 mb-3 xl:text-xl'>
            <span className='text-secondary-1'>
              <HiBriefcase size={30} />
            </span>
            {level}
          </li>
          <li className='flex items-center gap-1.5 mb-3 xl:text-xl'>
            <span className='text-secondary-1'>
              <HiCalendarDays size={30} />
            </span>
            {type}
          </li>
          <li className='flex items-center gap-1.5 mb-3 xl:text-xl'>
            <span className='text-secondary-1'>
              <HiBuildingOffice2 size={30} />
            </span>
            {workPlace}
          </li>
        </ul>
        <h4 className='text-light-2 text-lg font-semibold py-1 mt-6 mb-2 xl:text-xl'>
          Description
        </h4>
        <p className='text-light-1 xl:text-xl'>{description}</p>
      </section>
    </section>
  );
};
