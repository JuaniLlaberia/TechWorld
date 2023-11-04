import { useSearchParams } from 'react-router-dom';
import FilterBtn from '../../components/FilterBtn';
import Drawer from '../../components/Drawer';
import JobFilters from './JobFilters';

export const JobListInfo = ({ children }) => {
  return <main className='flex md:px-6 lg:px-0'>{children}</main>;
};

const Page = ({ children }) => {
  return <>{children}</>;
};

const ListHead = ({ title, subTitle }) => {
  return (
    <header className='bg-secondary-1 py-2 px-4 rounded-md md:rounded-none md:rounded-tl flex items-center justify-between'>
      <div>
        <h1 className='text-light-1 text-xl font-semibold xl:text-2xl'>
          {title}
        </h1>
        <h2 className='text-light-2 mb-3 xl:text-lg'>{subTitle}</h2>
      </div>
      <FilterBtn>
        <Drawer.Body title='Filter & Sort' windowName='filters-jobs'>
          <JobFilters />
        </Drawer.Body>
      </FilterBtn>
    </header>
  );
};

const List = ({ children }) => {
  return (
    <section className='bg-dark-2 w-full lg:max-w-[550px] rounded-bl-md md:border-r md:border-dark-1-border'>
      {children}
    </section>
  );
};

const Content = ({ children }) => {
  const [searchParams] = useSearchParams();
  const idToRender = searchParams.get('currentJobId') || '';

  return (
    <>
      {idToRender ? (
        <section className='fixed z-50 top-0 bg-dark-2 left-0 w-full border border-l-0 border-dark-1-border md:relative md:rounded-r-md'>
          {children}
        </section>
      ) : null}
    </>
  );
};

JobListInfo.Page = Page;
JobListInfo.ListHead = ListHead;
JobListInfo.List = List;
JobListInfo.Content = Content;

export default JobListInfo;
