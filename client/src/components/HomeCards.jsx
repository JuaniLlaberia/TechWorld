import { HiOutlineBriefcase, HiOutlineStar } from 'react-icons/hi2';
import IconCard from '../components/IconCard';

const HomeCards = () => {
  return (
    <section className='flex justify-around mb-2 mt-3 flex-wrap md:justify-normal md:gap-10'>
      <IconCard
        icon={<HiOutlineBriefcase />}
        text='All jobs'
        path='/jobs/all'
      />
      <IconCard icon={<HiOutlineStar />} text='For you' path='/jobs' />
      <IconCard icon={<HiOutlineStar />} text='For you' path='/jobs' />
      <IconCard icon={<HiOutlineStar />} text='For you' path='/jobs' />
    </section>
  );
};

export default HomeCards;
