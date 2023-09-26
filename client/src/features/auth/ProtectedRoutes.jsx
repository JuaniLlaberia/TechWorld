import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { useGetMe } from '../../hooks/useGetMe';
import { createPortal } from 'react-dom';

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { isLoading, user } = useGetMe();

  useEffect(() => {
    if (user?.status === 'fail' && !isLoading) navigate('/signup');
  }, [user, isLoading, navigate]);

  if (isLoading)
    return createPortal(
      <section className='bg-dark-1 fixed top-0 h-full w-full flex justify-center items-center'>
        <ClipLoader
          size={60}
          color='white'
        />
      </section>,
      document.body
    );

  if (user) return <Outlet />;
};

export default ProtectedRoutes;
