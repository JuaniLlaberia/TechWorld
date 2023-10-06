import { createContext, useContext } from 'react';
import { useGetMe } from '../features/users/useGetMe';
import { ClipLoader } from 'react-spinners';
import { createPortal } from 'react-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLoading, user: crrUser } = useGetMe();

  if (isLoading)
    return createPortal(
      <section className='bg-dark-1 fixed top-0 h-full w-full flex justify-center items-center'>
        <ClipLoader size={60} color='white' />
      </section>,
      document.body
    );

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
