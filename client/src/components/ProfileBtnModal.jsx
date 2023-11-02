import { Link } from 'react-router-dom';
import {
  HiOutlinePlusCircle,
  HiOutlineUser,
  HiOutlineBookmark,
  HiOutlinePencilSquare,
  HiOutlineCog8Tooth,
  HiOutlineArrowRightOnRectangle,
  HiOutlineSquare3Stack3D,
  HiOutlineNewspaper,
} from 'react-icons/hi2';
import { useLogout } from '../features/auth/useLogout';
import React from 'react';

const items = [
  {
    icon: <HiOutlineUser />,
    text: 'Profile',
    path: '/me/information',
  },
  {
    icon: <HiOutlineBookmark />,
    text: 'Saved',
    path: '/me/saved',
    hasDivider: true,
  },
  {
    icon: <HiOutlineNewspaper />,
    text: 'My articles',
    path: '/me/articles/drafts',
  },
  {
    icon: <HiOutlineSquare3Stack3D />,
    text: 'My posts',
    path: '/me/jobs',
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
      className='bg-dark-2 border border-dark-1-border w-48 2xl:w-52 shadow-sm shadow-light-3 absolute translate-y-[-120%] translate-x-[-67.5%] lg:translate-y-[-70%] lg:translate-x-[27.5%] 2xl:translate-x-[80%] py-4 rounded-md z-[1000] flex flex-col gap-2'
    >
      {items.map(item => (
        <React.Fragment key={item.text}>
          <li onClick={onClose}>
            <Link
              to={item.path}
              className='flex items-center gap-3.5 lg:hover:bg-dark-1-border lg:py-1 text-secondary-1 px-6 text-2xl 2xl:text-3xl'
            >
              {item.icon}{' '}
              <span className='text-light-1 text-base 2xl:text-lg'>
                {item.text}
              </span>
            </Link>
          </li>
          {item.hasDivider && (
            <div className='border-b border-dark-1-border my-2'></div>
          )}
        </React.Fragment>
      ))}
      <li
        key='logout'
        onClick={() => {
          close();
          logout();
        }}
        className='flex items-center gap-3.5 text-secondary-1 px-6 text-2xl 2xl:text-3xl'
      >
        <HiOutlineArrowRightOnRectangle />
        <span className='text-light-1 text-base 2xl:text-lg'>
          {isLoading ? 'Logging out' : 'Log out'}
        </span>
      </li>
    </ul>
  );
};

export default ProfileBtnModal;
