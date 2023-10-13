import JobPreview from '../features/jobs/JobPreview';
import HomeHeader from '../components/HomeHeader';
import HomeCards from '../components/HomeCards';
import { Searchbar } from '../components/Searchbar';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Searchbar />
      <HomeCards />
      <JobPreview />
    </>
  );
};

export default Home;
