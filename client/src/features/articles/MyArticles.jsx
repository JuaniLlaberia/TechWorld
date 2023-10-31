import { Link, NavLink, Outlet } from 'react-router-dom';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

const MyArticles = () => {
  return (
    <>
      <header className='flex justify-between mb-3'>
        <h1 className='text-light-1 text-2xl'>Your articles</h1>
        <Link
          to='/articles/new'
          className='flex items-center text-light-1 gap-1 bg-secondary-1 border border-dark-1-border rounded-md py-1 px-3 text-xl'
        >
          <HiOutlinePencilSquare /> <span className='text-base'>Write</span>
        </Link>
      </header>

      <section
        className='text-light-3 flex gap-8 border-b border-dark-1-border py-3 mb-4 xl:py-4'
        id='articles-nav'
      >
        <NavLink
          to='/me/articles/drafts'
          className='text-light-1 relative px-2'
        >
          Drafts
        </NavLink>
        <NavLink
          to='/me/articles/published'
          className='text-light-1 relative px-2'
        >
          Published
        </NavLink>
      </section>
      <Outlet />
    </>
  );
};

export default MyArticles;
