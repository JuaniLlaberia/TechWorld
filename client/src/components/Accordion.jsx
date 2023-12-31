import { createContext, useContext, useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

const AccordionContext = createContext();

const Accordion = ({ children }) => {
  const [open, setOpen] = useState('');
  const openAccordion = id => setOpen(id);
  const closeAccordion = () => setOpen('');

  return (
    <AccordionContext.Provider value={{ open, openAccordion, closeAccordion }}>
      <div className='w-full'>{children}</div>
    </AccordionContext.Provider>
  );
};

const Opener = ({ title, opens }) => {
  const { openAccordion, open, closeAccordion } = useContext(AccordionContext);
  return (
    <>
      {open === opens ? (
        <div
          onClick={closeAccordion}
          className='w-full flex items-center justify-between px-1 py-1.5 text-dark-1 lg:p-3 lg:text-xl xl:text-2xl cursor-pointer'
        >
          <h2>{title}</h2>
          <p>
            <HiChevronUp />
          </p>
        </div>
      ) : (
        <div
          className='w-full flex items-center justify-between px-1 py-1.5 text-dark-1 lg:p-3 lg:text-xl xl:text-2xl cursor-pointer'
          onClick={() => openAccordion(opens)}
          style={{ borderBottom: 'var(--border-sm)' }}
        >
          <h2>{title}</h2>
          <p>
            <HiChevronDown />
          </p>
        </div>
      )}
    </>
  );
};

const Body = ({ children, id }) => {
  const { open } = useContext(AccordionContext);

  return (
    <div
      className={`h-0 overflow-hidden text-dark-1 transition-all duration-400 cursor-pointer ${
        open === id ? 'py-1.5 border-b-[1px] border-dark-1-border h-auto' : ''
      }`}
    >
      {children}
    </div>
  );
};

Accordion.Opener = Opener;
Accordion.Body = Body;

export default Accordion;
