import { useAuthContext } from '../context/AuthContext';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import Modal from '../components/Modal';
import { SettingsModal } from './SettingsModal';

const HomeHeader = () => {
  const { user } = useAuthContext();

  return (
    <>
      {user?.status === 'fail' ? (
        <h1 className='text-light-1 text-2xl mb-4'>
          Welcome to{' '}
          <span className='text-secondary-1 font-semibold'>TechWorld</span>
        </h1>
      ) : (
        <section className='relative flex py-3 mb-3 items-start gap-3'>
          <img
            src={user?.data?.image}
            className='w-12 h-12 rounded-full border lg:w-16 lg:h-16'
            alt='profile picture'
          />
          <article className='flex flex-col'>
            <h1 className='text-sm text-light-2 lg:text-xl'>Hello, </h1>
            <h2 className='text-xl text-light-1 lg:text-2xl'>
              {user?.data?.fullName}
            </h2>
          </article>
          <Modal>
            <Modal.Open opens='settings'>
              <button className='text-light-1 text-3xl absolute top-5 right-0 lg:right-[-20%]'>
                <HiOutlineEllipsisVertical />
              </button>
            </Modal.Open>
            <Modal.Window
              windowName='settings'
              title='Settings'
            >
              <SettingsModal />
            </Modal.Window>
          </Modal>
        </section>
      )}
    </>
  );
};

export default HomeHeader;
