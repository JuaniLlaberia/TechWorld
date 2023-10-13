import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AppLayout = () => {
  return (
    <div className='bg-dark-1 min-h-[100vh] flex justify-center'>
      <main className='px-4 pt-2 lg:ml-24 2xl:ml-64 max-w-[1500px] w-[100vw]'>
        <Outlet />
      </main>
      <Navigation />
      <ScrollRestoration />
    </div>
  );
};

export default AppLayout;
