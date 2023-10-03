import defaultUserImg from '/default.jpg';
import Modal from '../components/Modal';
import UpdateDescForm from '../features/users/UpdateDescForm';
import UpdateListForm from '../features/users/UpdateListForm';
import ItemsList from '../components/ItemsList';
import Card from '../components/Card';
import UpdateProfileForm from '../features/users/UpdateProfileForm';
import ExperienceItem from '../features/users/ExperienceItem';

import { EditBtn } from '../components/EditBtn';
import { useGetMe } from '../features/users/useGetMe';
import { SkillItem } from '../features/users/SkillItem';
import UpdateShowExperiences from '../features/users/UpdateShowExperiences';
import PorfileSkeleton from '../components/ProfileSkeleton';

const Profile = () => {
  const { user, isLoading } = useGetMe();

  if (isLoading) return <PorfileSkeleton />;
  if (user.status === 'fail') return null;

  const {
    fullName,
    profession,
    description,
    image,
    skills,
    experience,
    location,
  } = user.data || user;

  return (
    <Modal>
      <Card position='horizontal'>
        <img
          src={defaultUserImg}
          className='rounded-full w-28 lg:w-36'
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
      <Card>
        <h3 className='text-light-2 font-semibold mb-2 lg:text-2xl'>About</h3>
        <p className='text-light-1 text-sm lg:text-xl'>{description}</p>
        <Modal.Open opens='about-modal'>
          <EditBtn />
        </Modal.Open>
      </Card>
      <Card>
        <h3 className='text-light-2 font-semibold mb-2 lg:text-2xl'>
          Experience & Projects
        </h3>
        <ItemsList
          items={experience.slice(0, 3)}
          render={el => (
            <ExperienceItem
              el={el}
              key={el._id}
            />
          )}
        />
        <Modal.Open opens='experience-modal-view'>
          <button className='bg-dark-2 text-light-2 border-t-[1px] py-1.5 font-semibol border-dark-1-border rounded-b-sm w-full absolute bottom-0 left-0 lg:text-xl lg:py-3'>
            View more
          </button>
        </Modal.Open>
        <Modal.Open opens='experience-modal-form'>
          <EditBtn />
        </Modal.Open>
      </Card>
      <Card>
        <h3 className='text-light-2 font-semibold mb-2 lg:text-2xl'>Skills</h3>
        <ItemsList
          items={skills.slice(0, 5)}
          render={(el, i) => (
            <SkillItem
              el={el}
              i={i}
              key={`${el}-${i}`}
            />
          )}
        />
        <Modal.Open opens='skills-modal'>
          <button className='bg-dark-2 text-light-2 border-t-[1px] py-1.5 font-semibol border-dark-1-border rounded-b-sm w-full absolute bottom-0 left-0 lg:text-xl lg:py-3'>
            View more
          </button>
        </Modal.Open>
        <Modal.Open opens='skills-modal'>
          <EditBtn />
        </Modal.Open>
      </Card>

      <Modal.Window windowName='personal-info-modal'>
        <UpdateProfileForm
          current={{ fullName, profession, location }}
          image={defaultUserImg}
        />
      </Modal.Window>
      <Modal.Window windowName='about-modal'>
        <UpdateDescForm current={description} />
      </Modal.Window>
      <Modal.Window windowName='experience-modal-form'>
        <UpdateShowExperiences
          current={experience}
          type='form'
        />
      </Modal.Window>
      <Modal.Window windowName='experience-modal-view'>
        <UpdateShowExperiences
          current={experience}
          type='view'
        />
      </Modal.Window>
      <Modal.Window windowName='skills-modal'>
        <UpdateListForm current={skills} />
      </Modal.Window>
    </Modal>
  );
};

export default Profile;
