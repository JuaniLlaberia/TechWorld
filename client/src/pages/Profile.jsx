import { Outlet } from 'react-router-dom';
import Modal from '../components/Modal';
import Card from '../components/Card';
import UpdateProfileForm from '../features/users/UpdateProfileForm';
import PorfileSkeleton from '../components/ProfileSkeleton';
import ProfileTabs from '../components/ProfileTabs';
import { EditBtn } from '../components/EditBtn';
import { useGetMe } from '../features/users/useGetMe';

const Profile = () => {
  const { user, isLoading } = useGetMe();

  if (isLoading) return <PorfileSkeleton />;
  if (user.status === 'fail') return null;

  const { fullName, profession, location, image } = user.data || user;

  return (
    <section className='pb-16 md:pb-2'>
      <Modal>
        <Card position='horizontal'>
          <img
            src={image}
            alt='profile picture'
            className='rounded-full w-28 h-28 lg:w-36 lg:h-36'
          />
          <div>
            <h1 className='text-light-1 text-xl font-bold lg:text-3xl'>
              {fullName}
            </h1>
            <h2 className='text-light-2 font-semibold lg:text-xl'>
              {profession}
            </h2>
            <h2 className='text-light-2 text-sm lg:text-xl'>{location}</h2>
          </div>
          <Modal.Open opens='personal-info-modal'>
            <EditBtn />
          </Modal.Open>
        </Card>
        <ProfileTabs />
        <Outlet />
        <Modal.Window
          windowName='personal-info-modal'
          title='Personal information'
        >
          <UpdateProfileForm
            current={{ fullName, profession, location }}
            image={image}
          />
        </Modal.Window>
      </Modal>
    </section>
  );
};

export default Profile;
