import JobPreviewList from '../features/jobs/JobPreviewList';
import HomeHeader from '../components/HomeHeader';
import HomeCards from '../components/HomeCards';
import { Searchbar } from '../components/Searchbar';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Searchbar />
      <HomeCards />
      <JobPreviewList />
    </>
  );
};

export default Home;
