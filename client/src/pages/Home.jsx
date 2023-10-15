import JobPreview from '../features/jobs/JobPreview';
import HomeHeader from '../components/HomeHeader';
import { Searchbar } from '../components/Searchbar';

const Home = () => {
  return (
    <>
      <section className='lg:flex lg:items-center lg:justify-between lg:mb-8'>
        <HomeHeader />
        <Searchbar />
      </section>
      <JobPreview />
    </>
  );
};

export default Home;
