import { useGetUser } from '../features/users/useGetUser';
import defaultUserImg from '/default.jpg';
import Card from '../components/Card';
import Modal from '../components/Modal';
import ExperienceItem from '../features/users/ExperienceItem';
import ItemsList from '../components/ItemsList';
import ProfileSkeleton from '../components/ProfileSkeleton';
import BackBtn from '../components/BackBtn';
import { SkillItem } from '../features/users/SkillItem';

export const UserProfile = () => {
  const { user, isLoading } = useGetUser();

  if (isLoading) return <ProfileSkeleton />;

  const { fullName, profession, description, skills, experience, location } =
    user.data.user;

  return (
    <section className='pb-16 md:pb-2'>
      <BackBtn />
      <Modal>
        <Card position='horizontal'>
          <img src={defaultUserImg} className='rounded-full w-28 lg:w-36' />
          <div>
            <h1 className='text-light-1 text-xl font-bold lg:text-3xl'>
              {fullName}
            </h1>
            <h2 className='text-light-2 font-semibold lg:text-xl'>
              {profession}
            </h2>
            <h2 className='text-light-2 text-sm lg:text-xl'>{location}</h2>
          </div>
        </Card>
        <Card>
          <h3 className='text-light-2 font-semibold mb-2 lg:text-2xl'>About</h3>
          <p className='text-light-1 text-sm lg:text-xl'>{description}</p>
        </Card>
        <Card>
          <h3 className='text-light-2 font-semibold mb-2 lg:text-2xl'>
            Experience & Projects
          </h3>
          <ItemsList
            items={experience?.slice(0, 3)}
            render={el => <ExperienceItem el={el} key={el._id} />}
          />
          <Modal.Open opens='experience'>
            <button className='bg-dark-2 text-light-2 border-t-[1px] py-1.5 font-semibol border-dark-1-border rounded-b-sm w-full absolute bottom-0 left-0 lg:text-xl lg:py-3'>
              View more
            </button>
          </Modal.Open>
        </Card>
        <Card>
          <h3 className='text-light-2 font-semibold mb-2 lg:text-2xl'>
            Skills
          </h3>
          <ItemsList
            items={skills?.slice(0, 5)}
            render={(el, i) => <SkillItem el={el} i={i} key={`${el}-${i}`} />}
          />
          <Modal.Open opens='skills'>
            <button className='bg-dark-2 text-light-2 border-t-[1px] py-1.5 font-semibol border-dark-1-border rounded-b-sm w-full absolute bottom-0 left-0 lg:text-xl lg:py-3'>
              View more
            </button>
          </Modal.Open>
        </Card>
        <Modal.Window windowName='experience' title='Experiences'>
          <ItemsList
            items={experience}
            render={el => <ExperienceItem el={el} key={el._id} />}
          />
        </Modal.Window>
        <Modal.Window windowName='skills' title='Skills'>
          <ItemsList
            items={skills}
            render={(el, i) => <SkillItem el={el} i={i} />}
          />
        </Modal.Window>
      </Modal>
    </section>
  );
};
