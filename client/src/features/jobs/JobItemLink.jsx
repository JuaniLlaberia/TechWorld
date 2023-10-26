import { Link } from 'react-router-dom';
import { HiOutlineMapPin } from 'react-icons/hi2';
import SavePost from '../../components/SavePost';

const JobItemLink = ({ item, link }) => {
  const { _id, name, user, location, workPlace, level, type } = item;

  return (
    <li className='relative border-b border-dark-1-border last:border-0'>
      <Link
        to={`${link}${_id}`}
        className=' text-light-1 flex flex-col gap-4 px-3 py-4 xl:py-5 xl:px-6'
      >
        <section className='w-full'>
          <h2 className='text-base font-semibold break-keep mb-2 lg:text-xl 2xl:text-[1.35rem] line-clamp-1 hover:underline'>
            {name}
          </h2>
          <div className='flex items-center gap-2 mb-1'>
            <img
              loading='lazy'
              src={user?.image}
              className='w-7 h-7 rounded-full bg-light-3 xl:w-10 xl:h-10'
              alt='Profile picture'
            />
            <h3 className='text-light-2 text-sm lg:text-base'>
              {user?.fullName}
            </h3>
          </div>
          <ul className='py-5 flex gap-3'>
            <li className='bg-dark-2 py-1 px-3 rounded-xl text-sm text-light-2'>
              {type}
            </li>
            <li className='bg-dark-2 py-1 px-3 rounded-xl text-sm text-light-2'>
              {level}
            </li>
            <li className='bg-dark-2 py-1 px-3 rounded-xl text-sm text-light-2'>
              {workPlace}
            </li>
          </ul>
          <h4 className='flex items-center gap-1 text-light-2 text-sm lg:text-base xl:text-lg'>
            <HiOutlineMapPin size={20} />
            {location}
          </h4>
        </section>
      </Link>
      <div className='absolute top-2.5 right-0'>
        <SavePost id={_id} />
      </div>
    </li>
  );
};

export default JobItemLink;
