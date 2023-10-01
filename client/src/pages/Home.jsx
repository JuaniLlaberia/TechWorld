import JobPreviewList from '../features/jobs/JobPreviewList';
import HomeHeader from '../components/HomeHeader';
import HomeCards from '../components/HomeCards';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeCards />
      <h2 className='text-light-2 text-lg font-semibold mb-2'>Recent jobs</h2>
      <JobPreviewList />
    </>
  );
};

export default Home;
