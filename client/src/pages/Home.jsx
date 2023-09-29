import {
  HiOutlineGlobeAlt,
  HiOutlineNewspaper,
  HiOutlineBriefcase,
} from 'react-icons/hi2';
import IconCard from '../components/IconCard';
import JobPreviewList from '../features/jobs/JobPreviewList';

const Home = () => {
  return (
    <>
      {true ? (
        <h1 className='text-light-1 text-2xl font-semibold mb-4'>
          Welcome back, John!
        </h1>
      ) : (
        <div className='bg-[red]'>SIGN UP TO ACCESS</div>
      )}
      <section className='grid grid-cols-3 gap-2 mb-2 mt-3'>
        <IconCard
          icon={<HiOutlineBriefcase />}
          text='All jobs'
          path='/jobs'
        />
        <IconCard
          icon={<HiOutlineNewspaper />}
          text='Recent'
          path='/jobs'
        />
        <IconCard
          icon={<HiOutlineGlobeAlt />}
          text='Jobs map'
          path='/map'
        />
      </section>
      <h2 className='text-light-2 text-lg font-semibold mb-2'>Jobs for you</h2>
      <JobPreviewList />
    </>
  );
};

export default Home;
