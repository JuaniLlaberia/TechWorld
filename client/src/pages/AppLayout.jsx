import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AppLayout = () => {
  return (
    <div className='bg-dark-1 min-h-[100vh] pb-20 2xl:px-64'>
      <main className='px-4 pt-2 lg:ml-24 2xl:ml-64 '>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};

export default AppLayout;
