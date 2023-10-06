import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineArrowsPointingOut,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ProfileJobCard = ({ name, id }) => {
  return (
    <li className='bg-dark-2 rounded-sm px-2 py-3 flex justify-between items-center border-[1px] border-dark-1-border mb-2'>
      <h2 className='text-light-1 font-semibold'>{name}</h2>
      <div className='flex items-center gap-2'>
        <Link to={`/job/${id}`} className='text-light-2'>
          <HiOutlineArrowsPointingOut size={25} />
        </Link>
        <button className='text-light-2'>
          <HiOutlinePencil size={25} />
        </button>
        <button className='text-light-2'>
          <HiOutlineTrash size={25} />
        </button>
      </div>
    </li>
  );
};

export default ProfileJobCard;
