import { HiOutlineMapPin } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';

const JobItem = ({ item }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    searchParams.set('currentJobId', item._id);
    setSearchParams(searchParams);
  };

  const { _id, name, user, location, workPlace } = item;

  return (
    <li
      onClick={handleClick}
      className={`relative border-b text-light-1 flex flex-col gap-4 w-full px-3 py-4 border-dark-1-border hover:cursor-pointer xl:py-5 xl:px-6 ${
        searchParams.get('currentJobId') === _id ? 'md:bg-[#3d3c3c69]' : ''
      }`}
    >
      <div className='w-full'>
        <h3 className='text-lg font-semibold break-keep lg:text-xl 2xl:text-[1.35rem] line-clamp-1 hover:underline'>
          {name}
        </h3>
        <h4 className='flex items-center gap-1 py-1 text-light-2 text-sm lg:text-base'>
          <span>
            <HiOutlineMapPin size={20} />
          </span>
          {location} ({workPlace})
        </h4>
      </div>
      <div className='flex items-center gap-2 mb-1'>
        <img
          loading='lazy'
          src={user?.image}
          className='w-8 h-8 rounded-full bg-light-3 xl:w-10 xl:h-10'
          alt='profile picture'
        />
        <h4 className='text-light-2 text-sm font-semibold lg:text-base'>
          {user?.fullName}
        </h4>
      </div>
    </li>
  );
};

export default JobItem;
