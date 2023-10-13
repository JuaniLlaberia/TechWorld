import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className='text-light-1 flex items-center gap-2 pb-2 pt-1'
    >
      <HiOutlineArrowLeft size={20} />
    </button>
  );
};

export default BackBtn;
