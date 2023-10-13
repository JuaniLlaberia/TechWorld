import { Link } from 'react-router-dom';

const SearchCard = ({ children, title, link }) => {
  return (
    <>
      <div className='flex items-center justify-between mb-3 mt-6'>
        <h2 className='text-light-2 text-lg font-semibold xl:text-2xl'>
          {title}
        </h2>
        <Link
          to={link}
          className='text-secondary-1 font-semibold hover:underline xl:text-xl'
        >
          View more
        </Link>
      </div>
      <section className='border border-dark-1-border px-2.5 rounded-md mb-4'>
        {children}
      </section>
    </>
  );
};

export default SearchCard;
