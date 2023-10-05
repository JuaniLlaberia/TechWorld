import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import PostSkeleton from '../components/PostSkeleton';
import { useGetJob } from '../features/auth/useGetJob';
import defaultUserImg from '/default.jpg';

export const JobPost = () => {
  const navigate = useNavigate();
  const { job, isLoading } = useGetJob();

  if (isLoading) return <PostSkeleton />;

  const { name, level, location, description, type, workPlace, user } =
    job.data.job;

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className='absolute left-0 pb-2.5 px-3 text-light-1 font-semibold flex items-center gap-2 w-full border-b border-light-3'
      >
        <HiOutlineArrowLeft />
        Go back
      </button>
      <section className='py-2 px-4 rounded-md pt-11'>
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
        <h2 className='text-light-2 mb-4'>
          {type} - {level}
        </h2>
        <div className='flex justify-end items-center gap-3 my-3'>
          <button className='bg-light-1 text-dark-1 py-1 px-4 rounded-md font-semibold mt-2 lg:text-xl lg:py-2 lg:px-6'>
            Apply now
          </button>
          <button className='bg-transparent outline outline-1 outline-light-1 text-light-1 py-1 px-4 rounded-md font-semibold mt-2 lg:text-xl lg:py-2 lg:px-6'>
            Save
          </button>
        </div>
        <h3 className='text-light-2 text-lg font-semibold border-t border-light-3 py-3'>
          Job details
        </h3>
        <p className='text-light-1'>{description}</p>
      </section>
    </>
  );
};
