import { Link } from 'react-router-dom';
import defaultUserImg from '/default.jpg';

const JobItemLink = ({ item, link }) => {
  const { _id, name, user, location, workPlace } = item;

  return (
    <li className='relative border-b border-dark-1-border last:border-0'>
      <Link
        to={`${link}${_id}`}
        className=' text-light-1 flex flex-col gap-4 w-full px-3 py-4 xl:py-5 xl:px-6'
      >
        <div className='w-full'>
          <h3 className='text-lg font-semibold break-keep lg:text-xl 2xl:text-[1.35rem] line-clamp-1 hover:underline'>
            {name}
          </h3>
          <h4 className='text-light-2 text-sm lg:text-base xl:text-lg'>
            {location} ({workPlace})
          </h4>
        </div>
        <div className='flex items-center gap-2 mb-1'>
          <img
            src={defaultUserImg}
            className='w-8 h-8 rounded-full xl:w-10 xl:h-10'
          />
          <h4 className='text-light-2 text-sm font-semibold lg:text-base'>
            {user?.fullName}
          </h4>
        </div>
      </Link>
    </li>
  );
};

export default JobItemLink;
