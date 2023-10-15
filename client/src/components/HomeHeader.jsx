import { HiOutlineBell } from 'react-icons/hi2';
import { useAuthContext } from '../context/AuthContext';
import defaultUserImg from '/default.jpg';

const HomeHeader = () => {
  const { user } = useAuthContext();

  return (
    <>
      {user?.status === 'fail' ? (
        <h1 className='text-light-1 text-2xl mb-4'>
          Welcome to{' '}
          <span className='text-secondary-1 font-semibold'>TechWorld</span>
        </h1>
      ) : (
        <>
          <div className=' relative flex py-3 mb-3 items-start gap-3'>
            <img
              src={defaultUserImg}
              className='w-12 h-12 rounded-full border '
            />
            <div className='flex flex-col'>
              <h2 className='text-sm text-light-2'>Hello, </h2>
              <h1 className='text-xl text-light-1'>{user?.data?.fullName}</h1>
            </div>
            <button className='text-light-2 absolute right-2 top-[50%] translate-y-[-50%]'>
              <HiOutlineBell size={28} />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default HomeHeader;
