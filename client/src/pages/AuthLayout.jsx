import { Link, Outlet } from 'react-router-dom';
import { HiOutlineXMark } from 'react-icons/hi2';
import Footer from '../components/Footer';

const AuthLayout = () => {
  return (
    <>
      <main className='bg-dark-1 h-[100vh] flex justify-center items-center'>
        <Link
          to='/'
          className='text-light-1 text-3xl absolute left-2 top-2 lg:text-4xl'
        >
          <HiOutlineXMark />
        </Link>
        <Link
          to='/'
          className='text-light-1 absolute left-50 top-2 font-bold text-2xl'
        >
          LOGO
        </Link>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
