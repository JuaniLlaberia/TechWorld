import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { differenceInDays } from 'date-fns';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import DeleteModal from '../../components/DeleteModal';
import UpdateJob from './UpdateJob';
import DropDownOptMenu from '../../components/DropDownOptMenu';
import { useDeleteJob } from './useDeleteJob';

const MyJobCard = ({ job }) => {
  const { deleteJob } = useDeleteJob();

  const date = differenceInDays(new Date(), new Date(job.createAt));

  return (
    <li className='py-2 flex flex-col border-b border-dark-1-border xl:py-6 xl:px-4 xl:text-xl'>
      <Link
        to={`/jobs/all?currentJobId=${job._id}`}
        className='text-light-1 font-semibold line-clamp-2 lg:hover:underline'
      >
        {job.name}
      </Link>
      <section className='flex justify-between mt-3 text-light-1'>
        <p className='text-light-2 text-sm'>
          Posted{' '}
          {date === 0 ? (
            'today'
          ) : date === 1 ? (
            'yesturday'
          ) : (
            <span>
              {differenceInDays(new Date(), new Date(job.createAt))} days ago
            </span>
          )}
        </p>
        <Modal>
          <DropDownOptMenu>
            <DropDownOptMenu.Opener />
            <DropDownOptMenu.Menu>
              <Modal.Open opens='edit-job'>
                <DropDownOptMenu.Item icon={<HiOutlinePencil />}>
                  Edit
                </DropDownOptMenu.Item>
              </Modal.Open>
              <Modal.Open opens='delete-job'>
                <DropDownOptMenu.Item icon={<HiOutlineTrash />}>
                  Remove
                </DropDownOptMenu.Item>
              </Modal.Open>
            </DropDownOptMenu.Menu>
          </DropDownOptMenu>
          <Modal.Window windowName='edit-job' title='Edit your offer'>
            <UpdateJob jobToEdit={job} />
          </Modal.Window>
          <Modal.Window windowName='delete-job' title='Remove job'>
            <DeleteModal onDelete={() => deleteJob(job._id)} />
          </Modal.Window>
        </Modal>
      </section>
    </li>
  );
};

export default MyJobCard;
