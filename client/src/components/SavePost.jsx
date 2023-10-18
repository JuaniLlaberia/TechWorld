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
      aria-label='save'
      className={`z-10 text-light-1 text-3xl xl:text-4xl ${
        isSaving || isUnSaving ? 'animate-pulse' : ''
      }`}
    >
      {isPostSave ? (
        <HiBookmark onClick={() => unSave(id)} />
      ) : (
        <HiOutlineBookmark
          onClick={() =>
            !isAuth && !isPostSave ? navigate('/signup') : save(id)
          }
        />
      )}
    </button>
  );
};

export default SavePost;
