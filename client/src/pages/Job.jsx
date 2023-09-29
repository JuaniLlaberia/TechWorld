import Drawer from '../components/Drawer';
import FilterBtn from '../components/FilterBtn';
import JobFilters from '../features/jobs/JobFilters';
import JobList from '../features/jobs/JobList';

const Job = () => {
  return (
    <div className='text-light-1'>
      <h1 className='text-light-1 text-xl font-semibold my-3'>
        Jobs recommended for you
      </h1>
      <div className='flex justify-end'>
        <FilterBtn>
          <Drawer.Body
            title='Filter & Sort'
            windowName='filters-jobs'
          >
            <JobFilters />
          </Drawer.Body>
        </FilterBtn>
      </div>
      <JobList />
    </div>
  );
};

export default Job;
