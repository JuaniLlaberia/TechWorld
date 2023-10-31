import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';

const DropDownContext = createContext();

const DropDownOptMenu = ({ children }) => {
  const [open, setOpen] = useState('');

  const openMenu = id => setOpen(id);
  const closeMenu = () => setOpen('');

  return (
    <DropDownContext.Provider value={{ open, openMenu, closeMenu }}>
      <div className='relative'>{children}</div>
    </DropDownContext.Provider>
  );
};

const Menu = ({ children, menuId, horizontal }) => {
  const { open, closeMenu } = useContext(DropDownContext);

  const ref = useRef();

  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [closeMenu]);

  if (open !== menuId) return null;

  return (
    <ul
      ref={ref}
      className={`${
        !horizontal ? 'flex flex-col gap-3' : 'flex gap-3'
      } absolute right-2.5 bg-dark-2 py-2.5 px-3.5 rounded-md z-50`}
    >
      {children}
    </ul>
  );
};

const Opener = ({ opensId }) => {
  const { openMenu } = useContext(DropDownContext);

  return (
    <button
      onClick={() => openMenu(opensId)}
      className='text-light-2 text-2xl'
    >
      <HiOutlineEllipsisVertical />
    </button>
  );
};

const Item = ({ children, icon, onClick }) => {
  const { closeMenu } = useContext(DropDownContext);

  const handleClick = () => {
    onClick?.();
    closeMenu();
  };

  return (
    <li
      onClick={handleClick}
      className='flex items-center gap-2'
    >
      <span className='text-lg text-secondary-1'>{icon}</span>
      <span className='text-light-1'>{children}</span>
    </li>
  );
};

DropDownOptMenu.Menu = Menu;
DropDownOptMenu.Opener = Opener;
DropDownOptMenu.Item = Item;

export default DropDownOptMenu;
