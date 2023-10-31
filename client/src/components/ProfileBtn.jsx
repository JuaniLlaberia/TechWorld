import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi2';
import ProfileBtnModal from './ProfileBtnModal';
import { useAuthContext } from '../context/AuthContext';

const ProfileBtn = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user } = useAuthContext();

  const open = () => setIsOpen(true);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  const ref = useRef();

  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [close]);

  return (
    <>
      <li className='text-light-2 relative md:hover:text-light-1 transition-colors'>
        <button
          onClick={isAuth ? () => open() : () => navigate('/signup')}
          className='text-3xl lg:text-4xl 2xl:flex 2xl:items-center 2xl:gap-2'
        >
          {isAuth ? (
            <img
              src={user.data.image}
              className='w-8 h-8 rounded-full border border-dark-1-border bg-light-2'
            />
          ) : (
            <HiOutlineUser />
          )}
          <span className='hidden text-xl 2xl:block'>Account</span>
        </button>
        {isOpen && isAuth && (
          <ProfileBtnModal reference={ref} onClose={close} />
        )}
      </li>
    </>
  );
};

export default ProfileBtn;
