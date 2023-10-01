import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { isLoading, user } = useAuthContext();

  useEffect(() => {
    if (user?.status === 'fail' && !isLoading) navigate('/signup');
  }, [user, isLoading, navigate]);

  if (user) return <Outlet />;
};

export default ProtectedRoutes;
