import { Link } from 'react-router-dom';
import defaultUserImg from '/default.jpg';
import { HiOutlineBookmark } from 'react-icons/hi2';

const JobItem = ({ item }) => {
  const { _id, name, img, company, location } = item;

  return (
    <li className='relative border-b-[1px] border-dark-1-border last:border-0'>
      <Link
        to={`/job/${_id}`}
        className='text-light-1 flex gap-4 py-2'
      >
        <img
          src={defaultUserImg}
          className='w-20 rounded-full mb-2'
        />
        <div className=' w-full'>
          <h3 className='text-lg font-semibold break-keep'>{name}</h3>
          <h4 className='text-light-2'>{company}</h4>
          <h4 className='text-light-2 text-sm'>{location}</h4>
        </div>
      </Link>
      <button className='absolute right-0 bottom-6 z-10 text-light-1'>
        <HiOutlineBookmark size={30} />
      </button>
    </li>
  );
};

export default JobItem;
