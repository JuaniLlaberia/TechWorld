import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user?.status === 'fail') return navigate('/signup');
  }, [user, navigate]);

  if (user) return <Outlet />;
};

export default ProtectedRoutes;
