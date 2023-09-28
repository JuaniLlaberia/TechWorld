import { ClipLoader } from 'react-spinners';

const SaveBtn = ({ isUpdating, ...props }) => {
  return (
    <div className='flex justify-end mt-3'>
      <button
        {...props}
        className='bg-light-1 text-dark-1 py-1 px-4 rounded-full font-semibold mt-2'
      >
        {isUpdating ? <ClipLoader /> : 'Save'}
      </button>
    </div>
  );
};

export default SaveBtn;