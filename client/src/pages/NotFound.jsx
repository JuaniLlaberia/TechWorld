import { Link } from 'react-router-dom';
import BackBtn from '../components/BackBtn';

export const NotFound = () => {
  return (
    <main className='bg-dark-1 h-[100vh] px-2 text-center'>
      <BackBtn />
      <h1 className='text-light-1 text-8xl text-secondary-1 font-semibold py-3 mt-16'>
        404
      </h1>
      <p className='text-light-1 text-xl mb-1'>
        <span className='font-semibold'>Oops!</span> Page not found
      </p>
      <p className='text-light-2 text-sm mb-8 lg:text-base'>
        We're sorry but the page you are searching doesn't exist in our website.
      </p>
      <Link className='text-dark-1 bg-light-1 py-2 px-4 rounded-md font-semibold text-lg lg:text-xl'>
        Go home
      </Link>
    </main>
  );
};
