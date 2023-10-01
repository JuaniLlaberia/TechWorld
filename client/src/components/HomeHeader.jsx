import { useAuthContext } from '../context/AuthContext';

const HomeHeader = () => {
  const { user } = useAuthContext();

  return (
    <h1 className='text-light-1 text-2xl font-semibold'>
      {user?.status === 'fail'
        ? 'Hey there!'
        : `Welcome ${user?.data?.fullName?.split(' ')[0]}!`}
    </h1>
  );
};

export default HomeHeader;
