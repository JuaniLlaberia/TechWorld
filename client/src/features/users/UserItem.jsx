import { Link } from 'react-router-dom';

const UserItem = ({ item }) => {
  const { _id, fullName, image, profession, location } = item;

  return (
    <li className='border-b-[1px] border-dark-1-border last:border-0 py-2 px-4'>
      <Link
        to={`/user/${_id}`}
        className='text-light-1 flex gap-4 py-2'
      >
        <img
          loading='lazy'
          src={image}
          className='w-20 rounded-full mb-2 xl:w-24'
          alt='profile picture'
        />
        <div className=' w-full'>
          <h3 className='text-lg font-semibold break-keep lg:text-xl 2xl:text-[1.35rem]'>
            {fullName}
          </h3>
          <h4 className='text-light-2 lg:text-lg'>{profession}</h4>
          <h4 className='text-light-2 text-sm lg:text-base'>{location}</h4>
        </div>
      </Link>
    </li>
  );
};

export default UserItem;
