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
              className='w-12 h-12 rounded-full border lg:w-16 lg:h-16'
            />
            <div className='flex flex-col'>
              <h2 className='text-sm text-light-2 lg:text-xl'>Hello, </h2>
              <h1 className='text-xl text-light-1 lg:text-2xl'>
                {user?.data?.fullName}
              </h1>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeHeader;
