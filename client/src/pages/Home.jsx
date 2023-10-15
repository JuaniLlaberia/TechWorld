import JobPreview from '../features/jobs/JobPreview';
import HomeHeader from '../components/HomeHeader';
import { Searchbar } from '../components/Searchbar';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Searchbar />
      <JobPreview />
    </>
  );
};

export default Home;
