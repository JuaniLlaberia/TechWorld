import {
  HiOutlineGlobeAlt,
  HiOutlineNewspaper,
  HiOutlineBriefcase,
} from 'react-icons/hi2';
import IconCard from '../components/IconCard';

const HomeCards = () => {
  return (
    <section className='grid grid-cols-3 gap-2 mb-2 mt-3'>
      <IconCard
        icon={<HiOutlineBriefcase />}
        text='All jobs'
        path='/jobs/all'
      />
      <IconCard
        icon={<HiOutlineNewspaper />}
        text='For you'
        path='/jobs'
      />
      <IconCard
        icon={<HiOutlineGlobeAlt />}
        text='Jobs map'
        path='/map'
      />
    </section>
  );
};

export default HomeCards;
