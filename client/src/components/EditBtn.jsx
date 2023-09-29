import { HiOutlinePencil } from 'react-icons/hi2';

export const EditBtn = ({ ...props }) => {
  return (
    <button
      className='text-light-3 text-2xl absolute top-3 right-3 lg:text-3xl'
      {...props}
    >
      <HiOutlinePencil />
    </button>
  );
};
