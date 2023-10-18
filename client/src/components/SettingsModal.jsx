import { Link } from 'react-router-dom';
import { useLogout } from '../features/auth/useLogout';

export const SettingsModal = () => {
  const { logout, isLoading } = useLogout();

  return (
    <ul className='text-center flex flex-col gap-3'>
      <li className='hover:text-light-2 transition-colors lg:text-xl'>
        <Link to='/change-my-password'>Change password</Link>
      </li>
      <li>
        <button
          onClick={logout}
          className='text-[#f55858] hover:text-[#ff4242] transition-colors lg:text-xl'
        >
          {isLoading ? 'Logging out...' : 'Log out'}
        </button>
      </li>
    </ul>
  );
};
