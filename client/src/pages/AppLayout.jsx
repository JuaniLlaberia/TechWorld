import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AppLayout = () => {
  return (
    <div className='bg-dark-1 min-h-[100vh] pb-20'>
      <main className='px-4 pt-2'>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};

export default AppLayout;
