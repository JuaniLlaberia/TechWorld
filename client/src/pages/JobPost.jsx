import {
  HiBriefcase,
  HiBuildingOffice2,
  HiCalendarDays,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import PostSkeleton from '../components/PostSkeleton';
import { useGetJob } from '../features/jobs/useGetJob';
import defaultUserImg from '/default.jpg';
import SavePost from '../components/SavePost';

export const JobPost = () => {
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
    <>
      <section className='py-2 px-4 rounded-md pt-2'>
        <h1 className='text-light-1 text-2xl font-semibold mb-1'>{name}</h1>
        <h2 className='text-light-2 mb-2'>
          {location} ({workPlace})
        </h2>
        <div className='flex items-center justify-start gap-2 mb-1'>
          <img
            src={defaultUserImg}
            className='w-8 h-8 rounded-full xl:w-10'
          />
          <Link
            to={`/user/${user?._id}`}
            className='text-light-2 text-sm font-semibold hover:underline lg:text-base'
          >
            {user?.fullName}
          </Link>
        </div>

        <div className='flex justify-end items-center gap-3 my-3 mt-6'>
          <Link
            // target='_blank'
            to={applicationUs ? `/apply/${_id}` : companyUrl}
            className='bg-light-1 text-dark-1 py-1 px-4 rounded-md font-semibold lg:text-xl lg:py-2 lg:px-6'
          >
            Apply now
          </Link>
          <SavePost id={_id} />
        </div>

        <h3 className='text-light-2 text-lg font-semibold border-t border-light-3 py-3'>
          Details
        </h3>
        <ul className='text-light-1 '>
          <li className='flex items-center gap-1.5 mb-3'>
            <span className='text-light-3'>
              <HiBriefcase size={28} />
            </span>
            {level}
          </li>
          <li className='flex items-center gap-1.5 mb-3'>
            <span className='text-light-3'>
              <HiCalendarDays size={28} />
            </span>
            {type}
          </li>
          <li className='flex items-center gap-1.5 mb-3'>
            <span className='text-light-3'>
              <HiBuildingOffice2 size={28} />
            </span>
            {workPlace}
          </li>
        </ul>
        <h4 className='text-light-2 text-lg font-semibold py-1 mt-6 mb-2'>
          Description
        </h4>
        <p className='text-light-1'>{description}</p>
      </section>
    </>
  );
};
