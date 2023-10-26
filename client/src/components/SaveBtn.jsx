import { ClipLoader } from 'react-spinners';

const SaveBtn = ({ isUpdating, ...props }) => {
  return (
    <div className='flex justify-end mt-3'>
      <button
        {...props}
        className='bg-light-1 flex justify-center min-w-[80px] text-dark-1 transition duration-200 ease-in-out hover:bg-[#dddcdc] py-1 px-4 rounded-lg font-semibold mt-2 lg:text-xl lg:py-2 lg:px-6 hover:text-light-2'
      >
        {isUpdating ? <ClipLoader size={'20px'} /> : 'Save'}
      </button>
    </div>
  );
};

export default SaveBtn;
