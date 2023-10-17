import Card from '../../components/Card';
import ItemsList from '../../components/ItemsList';
import Modal from '../../components/Modal';
import ExperienceItem from './ExperienceItem';
import UpdateDescForm from './UpdateDescForm';
import UpdateListForm from './UpdateListForm';
import UpdateShowExperiences from './UpdateShowExperiences';
import { EditBtn } from '../../components/EditBtn';
import { SkillItem } from './SkillItem';
import { useAuthContext } from '../../context/AuthContext';

const ProfileInfo = () => {
  const { user } = useAuthContext();

  const {
    description,
    // image,
    skills,
    experience,
  } = user.data;

  return (
    <>
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

      <Modal.Window
        windowName='about-modal'
        title='Tell us about you'
      >
        <UpdateDescForm current={description} />
      </Modal.Window>
      <Modal.Window
        windowName='experience-modal-form'
        title='Add more experiences
        '
      >
        <UpdateShowExperiences
          current={experience}
          type='form'
        />
      </Modal.Window>
      <Modal.Window
        windowName='experience-modal-view'
        title='All your experiences
        '
      >
        <UpdateShowExperiences
          current={experience}
          type='view'
        />
      </Modal.Window>
      <Modal.Window
        windowName='skills-modal'
        title='Your skills'
      >
        <UpdateListForm current={skills} />
      </Modal.Window>
    </>
  );
};

export default ProfileInfo;
