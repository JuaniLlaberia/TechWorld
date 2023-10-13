import { useAuthContext } from '../context/AuthContext';

const HomeHeader = () => {
  const { user } = useAuthContext();

  return (
    <>
      {user?.status === 'fail' ? (
        <h1 className='text-light-1 text-lg font-semibold'>Welcome</h1>
      ) : (
        <>
          <h1 className='mb-3 xl:mb-6'>
            <span className='text-light-2 text-base lg:text-lg xl:text-xl'>
              Hello,
            </span>
            <br />
            <span className='text-light-1 text-2xl font-semibold lg:text-3xl xl:text-4xl'>
              {user?.data?.fullName}
            </span>
          </h1>
        </>
      )}
    </>
  );
};

export default HomeHeader;
