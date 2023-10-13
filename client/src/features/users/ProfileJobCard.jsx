import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineArrowsPointingOut,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import DeleteModal from '../../components/DeleteModal';
import { useDeleteJob } from '../../features/jobs/useDeleteJob';

const ProfileJobCard = ({ name, id }) => {
  const { deleteJob } = useDeleteJob();

  return (
    <li className='bg-dark-2 rounded-sm px-2 py-3 flex justify-between items-center border-[1px] border-dark-1-border mb-2 xl:py-6 xl:px-4 xl:text-xl'>
      <h2 className='text-light-1 font-semibold'>{name}</h2>
      <div className='flex items-center gap-2'>
        <Link
          to={`/job/${id}`}
          className='text-light-2'
        >
          <HiOutlineArrowsPointingOut size={25} />
        </Link>
        <Modal>
          <Modal.Open opens='edit-job'>
            <button className='text-light-2'>
              <HiOutlinePencil size={25} />
            </button>
          </Modal.Open>
          <Modal.Open opens='delete-job'>
            <button className='text-light-2'>
              <HiOutlineTrash size={25} />
            </button>
          </Modal.Open>
          <Modal.Window
            windowName='delete-job'
            title={`Delete '${name}'`}
          >
            <DeleteModal onDelete={() => deleteJob(id)} />
          </Modal.Window>
        </Modal>
      </div>
    </li>
  );
};

export default ProfileJobCard;
