import { createContext, useContext } from 'react';
import { useGetMe } from '../features/users/useGetMe';
import { ClipLoader } from 'react-spinners';
import { createPortal } from 'react-dom';
import FullScreenLoader from '../components/FullScreenLoader';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLoading, user: crrUser } = useGetMe();

  if (isLoading) return createPortal(<FullScreenLoader />, document.body);

  const user = crrUser.status ? crrUser : { status: 'success', data: crrUser };

  return (
    <AuthContext.Provider
      value={{ isLoading, user, isAuth: user.status === 'success' }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
