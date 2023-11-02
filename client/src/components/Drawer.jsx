import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineXMark,
} from 'react-icons/hi2';

const DrawerContext = createContext();

export const Drawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState('');

  const open = name => setIsOpen(name);
  const close = () => setIsOpen('');

  return (
    <DrawerContext.Provider value={{ open, close, isOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

const Opener = ({ opens }) => {
  const { open } = useContext(DrawerContext);

  return (
    <button
      aria-label='open'
      onClick={() => open(opens)}
      className='bg-light-1 text-dark-1 text-lg p-1 rounded-md lg:text-xl xl:text-2xl'
    >
      <HiOutlineAdjustmentsHorizontal size={30} />
    </button>
  );
};

const Body = ({ children, title, windowName }) => {
  const { close, isOpen } = useContext(DrawerContext);

  return createPortal(
    <>
      <div
        className={`fixed z-[100] bottom-0 left-[50%] translate-x-[-50%] p-3 pt-4 bg-light-1 w-full rounded-t-lg ${
          isOpen === windowName ? 'translate-y-0' : 'translate-y-full'
        } transition-all ease-in-out duration-300 max-w-[800px]`}
      >
        <h1 className='text-lg font-semibold lg:text-2xl'>{title}</h1>
        {cloneElement(children, { onClose: close })}
        <HiOutlineXMark
          className='absolute top-2 right-2'
          size={25}
          onClick={close}
        />
      </div>
      {isOpen === windowName ? (
        <div
          onClick={close}
          className='fixed top-0 z-50 left-0 h-full w-full bg-[#5f5d5d34] backdrop-blur-[1.5px]'
        ></div>
      ) : (
        ''
      )}
    </>,
    document.body
  );
};

Drawer.Opener = Opener;
Drawer.Body = Body;

export default Drawer;
