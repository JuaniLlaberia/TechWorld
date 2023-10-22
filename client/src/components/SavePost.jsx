import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useSaveJob } from '../features/jobs/useSaveJob';
import { useUnSaveJob } from '../features/jobs/useUnSaveJob';
import { useState } from 'react';

const SavePost = ({ id }) => {
  const navigate = useNavigate();
  const [optimisticUpdate, setOptimisticUpdate] = useState(false);

  const { user, isAuth } = useAuthContext();
  const { save } = useSaveJob();
  const { unSave } = useUnSaveJob();

  const isPostSave = user?.data?.savedPosts.includes(id);

  const handleSave = () => {
    setOptimisticUpdate(true);
    save(id);
  };

  const handleUnSave = () => {
    setOptimisticUpdate(false);
    unSave(id);
  };

  return (
    <button
      aria-label='save'
      className={`z-10 text-light-1 text-3xl xl:text-4xl`}
    >
      {isPostSave || optimisticUpdate ? (
        <HiBookmark onClick={() => handleUnSave(id)} />
      ) : !isPostSave || !optimisticUpdate ? (
        <HiOutlineBookmark
          onClick={() =>
            !isAuth && !isPostSave ? navigate('/signup') : handleSave(id)
          }
        />
      ) : null}
    </button>
  );
};

export default SavePost;
