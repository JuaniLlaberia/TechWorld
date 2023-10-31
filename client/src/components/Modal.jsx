import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineXMark } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState('');

  const open = windowName => setIsOpen(windowName);
  const close = () => setIsOpen('');

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens }) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) });
};

const Window = ({ children, windowName, title }) => {
  const { isOpen, close } = useContext(ModalContext);

  if (isOpen !== windowName) return null;

  return createPortal(
    <>
      <motion.div
        initial={{ y: '-100%', x: '-50%', opacity: 0 }}
        animate={{ y: '-40%', x: '-50%', opacity: 1 }}
        className='bg-dark-1 text-light-1 fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] w-[50vw] min-w-[325px] max-w-[650px] p-3 rounded-sm min-h-[100px] z-[100] shadow-md shadow-[#222121dc]'
      >
        <div className='flex justify-between items-start py-0 border-b-[1px] border-dark-1-border mb-3'>
          <h1 className='text-light-2 text-lg font-semibold mb-2 lg:text-2xl'>
            {title}
          </h1>
          <button onClick={close}>
            <HiOutlineXMark size={25} />
          </button>
        </div>
        <div>{cloneElement(children, { onClose: close })}</div>
      </motion.div>
      <div
        onClick={close}
        className='fixed top-0 left-0 h-full w-full z-50 bg-[#5f5d5d34] backdrop-blur-[1.5px]'
      ></div>
    </>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
