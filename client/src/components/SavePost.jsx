import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi2';
import { useSaveJob } from '../features/jobs/useSaveJob';
import { useUnSaveJob } from '../features/jobs/useUnSaveJob';
import { useAuthContext } from '../context/AuthContext';

const SavePost = ({ id }) => {
  const { user } = useAuthContext();
  const { save, isSaving } = useSaveJob();
  const { unSave, isUnSaving } = useUnSaveJob();

  const isPostSave = user.data.savedPosts.includes(id);

  return (
    <button
      className={`absolute right-0 bottom-6 z-10 text-light-1 ${
        isSaving || isUnSaving ? 'animate-pulse' : ''
      }`}
    >
      {isPostSave ? (
        <HiBookmark size={30} onClick={() => unSave(id)} />
      ) : (
        <HiOutlineBookmark size={30} onClick={() => save(id)} />
      )}
    </button>
  );
};

export default SavePost;
