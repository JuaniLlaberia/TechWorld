import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className='text-light-1 flex items-center gap-2 pb-2 pt-1 text-xl lg:text-2xl 2xl:text-3xl'
    >
      <HiOutlineArrowLeft />
    </button>
  );
};

export default BackBtn;
