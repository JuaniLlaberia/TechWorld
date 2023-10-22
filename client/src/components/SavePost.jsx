import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useSaveJob } from '../features/jobs/useSaveJob';
import { useUnSaveJob } from '../features/jobs/useUnSaveJob';
import { useState } from 'react';

const SavePost = ({ id }) => {
  const navigate = useNavigate();

  const { user, isAuth } = useAuthContext();
  const { save } = useSaveJob();
  const { unSave } = useUnSaveJob();

  const isPostSave = user?.data?.savedPosts.includes(id);
  const [optimisticUpdate, setOptimisticUpdate] = useState(isPostSave);

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
      {optimisticUpdate ? (
        <HiBookmark onClick={() => handleUnSave(id)} />
      ) : !optimisticUpdate ? (
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
