import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { useAuthContext } from '../context/AuthContext';

const HomeHeader = () => {
  const { user } = useAuthContext();

  return (
    <>
      {user?.status === 'fail' ? (
        <h1 className='text-light-1 text-lg font-semibold'>Welcome</h1>
      ) : (
        <>
          <h1 className='mb-3'>
            <span className='text-light-2 text-base'>Hello,</span>
            <br />
            <span className='text-light-1 text-2xl font-semibold'>
              {user?.data?.fullName}
            </span>
          </h1>
          <h6 className='text-light-1 absolute top-2.5 right-2.5 flex gap-2'>
            <HiOutlineCog8Tooth size={30} />
            <span className='hidden xl:block'>Settings </span>
          </h6>
        </>
      )}
    </>
  );
};

export default HomeHeader;
