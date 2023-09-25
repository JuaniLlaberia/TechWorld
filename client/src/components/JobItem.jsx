import { Link } from 'react-router-dom';

const JobItem = ({ id, img, title, location, company }) => {
  return (
    <li>
      <Link
        to={`/job/${id}`}
        className='w-full bg-dark-2 rounded-md p-3 flex gap-4 mb-2 shadow-md shadow-dark-shadow'
      >
        <img
          src={img}
          className='w-20 rounded-full'
        />
        <section>
          <h2 className='font-semibold text-md text-light-1'>{title}</h2>
          <p className='text-base text-light-2'>{company}</p>
          <p className='text-sm text-light-3'>{location}</p>
        </section>
      </Link>
    </li>
  );
};

export default JobItem;
