import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AppLayout = () => {
  return (
    <div className='bg-dark-1 h-[100vh]'>
      <main className='px-4 pt-2'>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};

export default AppLayout;
