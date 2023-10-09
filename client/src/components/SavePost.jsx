import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useSaveJob } from '../features/jobs/useSaveJob';
import { useUnSaveJob } from '../features/jobs/useUnSaveJob';

const SavePost = ({ id }) => {
  const navigate = useNavigate();

  const { user, isAuth } = useAuthContext();
  const { save, isSaving } = useSaveJob();
  const { unSave, isUnSaving } = useUnSaveJob();

  const isPostSave = user?.data?.savedPosts.includes(id);

  return (
    <button
      className={`z-10 text-light-1 ${
        isSaving || isUnSaving ? 'animate-pulse' : ''
      }`}
    >
      {isPostSave ? (
        <HiBookmark
          size={30}
          onClick={() => unSave(id)}
        />
      ) : (
        <HiOutlineBookmark
          size={30}
          onClick={() =>
            !isAuth && !isPostSave ? navigate('/signup') : save(id)
          }
        />
      )}
    </button>
  );
};

export default SavePost;
