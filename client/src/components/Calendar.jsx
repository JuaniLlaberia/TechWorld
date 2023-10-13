import { useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';
import DatePicker from 'tailwind-datepicker-react';

const options = {
  title: 'Select date',
  autoHide: true,
  clearBtn: true,
  todayBtn: false,
  minDate: new Date('1950-01-01'),
  theme: {
    background: 'dark:bg-dark-2',
    clearBtn: 'dark:bg-dark-1',
    text: '',
    icons: 'dark:bg-transparent dark:text-lg',
    disabledText: 'dark:text-[#afaeae4b]',
    input:
      'py-2 h-10 2xl:h-14 text-base dark:bg-transparent dark:border dark:border-light-3 dark:placeholder:text-light-2 dark:focus:outline dark:focus:outline-light-1 dark:focus:outline-1',
    inputIcon: 'dark:text-light-3',
    selected: 'bg-[#db4dff]',
  },
  icons: {
    prev: () => (
      <span>
        <HiOutlineArrowLeft size={20} />
      </span>
    ),
    next: () => (
      <span>
        <HiOutlineArrowRight size={20} />
      </span>
    ),
  },
  datepickerClassNames: 'top-[-300%] left-[50%] translate-x-[-50%]',
  defaultDate: false,
  language: 'en',
};

const Calendar = ({ handleChange }) => {
  const [show, setShow] = useState(false);

  const handleClose = state => {
    setShow(state);
  };

  return (
    <DatePicker
      options={options}
      onChange={handleChange}
      show={show}
      setShow={handleClose}
    />
  );
};

export default Calendar;
