import { useSearchParams } from 'react-router-dom';
import JobListSide from './JobListSide';
import { JobSideInfo } from './JobSideInfo';

const JobListSideBySide = () => {
  const [searchParams] = useSearchParams();
  const idToRender = searchParams.get('currentJobId') || '';

  return (
    <main className='flex md:px-8'>
      <section className='bg-dark-2 w-full md:w-[50vw] max-w-[450px] rounded-bl-md md:border-r md:border-dark-1-border'>
        <JobListSide />
      </section>
      {idToRender && (
        <section className='fixed z-50 top-0 bg-dark-2 left-0 w-full md:relative md:rounded-r-md'>
          <JobSideInfo />
        </section>
      )}
    </main>
  );
};

export default JobListSideBySide;
