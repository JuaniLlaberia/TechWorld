import { Link } from 'react-router-dom';
import {
  HiOutlinePlusCircle,
  HiOutlineUser,
  HiOutlineBookmark,
  HiOutlinePencilSquare,
  HiOutlineCog8Tooth,
  HiOutlineArrowRightOnRectangle,
  HiOutlineSquare3Stack3D,
} from 'react-icons/hi2';
import { useLogout } from '../features/auth/useLogout';

const items = [
  {
    icon: <HiOutlineUser />,
    text: 'Profile',
    path: '/me/information',
    hasDivider: true,
  },
  {
    icon: <HiOutlineSquare3Stack3D />,
    text: 'My posts',
    path: '/me/my-jobs',
  },
  {
    icon: <HiOutlineBookmark />,
    text: 'Saved',
    path: '/me/saved',
  },
  {
    icon: <HiOutlinePencilSquare />,
    text: 'Write article',
    path: '/articles/new',
  },
  {
    icon: <HiOutlinePlusCircle />,
    text: 'Add job',
    path: '/new',
    hasDivider: true,
  },
  {
    icon: <HiOutlineCog8Tooth />,
    text: 'Settings',
    path: '/change-my-password',
  },
];

const ProfileBtnModal = ({ reference, onClose }) => {
  const { logout, isLoading } = useLogout();

  return (
    <ul
      ref={reference}
      className='bg-dark-2 border border-dark-1-border shadow-sm shadow-light-3 fixed bottom-20 right-5 py-4 rounded-md z-[1000] flex flex-col gap-2'
    >
      {items.map(item => (
        <>
          <li
            key={item.text}
            onClick={onClose}
          >
            <Link
              to={item.path}
              className='flex items-center gap-3.5 text-secondary-1 px-6 text-2xl'
            >
              {item.icon}{' '}
              <span className='text-light-1 text-base'>{item.text}</span>
            </Link>
          </li>
          {item.hasDivider && (
            <div className='border-b border-dark-1-border my-2'></div>
          )}
        </>
      ))}
      <li
        key='logout'
        onClick={() => {
          close();
          logout();
        }}
        className='flex items-center gap-3.5 text-secondary-1 px-6 text-2xl'
      >
        <HiOutlineArrowRightOnRectangle />
        <span className='text-light-1 text-base'>
          {isLoading ? 'Logging out' : 'Log out'}
        </span>
      </li>
    </ul>
  );
};

export default ProfileBtnModal;
