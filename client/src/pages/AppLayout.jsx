import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AppLayout = () => {
  return (
    <div className='bg-dark-1 min-h-[100vh] flex justify-center'>
      <main className='pt-2 px-4 lg:ml-24 2xl:ml-48 lg:px-0 w-full lg:w-[72.5vw] xl:w-[60vw] 2xl:w-[45vw]'>
        <Outlet />
      </main>
      <Navigation />
      <ScrollRestoration />
    </div>
  );
};

export default AppLayout;
