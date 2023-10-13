import { useSearchParams } from 'react-router-dom';
import defaultUserImg from '/default.jpg';

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
      className={`relative border-b-[1px] text-light-1 flex flex-col gap-4 w-full px-3 py-4 border-dark-1-border last:border-0 hover:cursor-pointer xl:py-5 xl:px-6 ${
        searchParams.get('currentJobId') === _id ? 'md:bg-[#3d3c3c69]' : ''
      }`}
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
    </li>
  );
};

export default JobItem;
