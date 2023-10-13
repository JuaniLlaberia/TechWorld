import { Link } from 'react-router-dom';

const IconCard = ({ icon, text, path }) => {
  return (
    <Link
      to={path}
      className='px-3 h-20 rounded-md flex flex-col items-center justify-center [&>span]:hover:text-light-2 transition-colors'
    >
      <span className='text-secondary-1 text-4xl'>{icon}</span>
      <span className='text-light-1 text-base'>{text}</span>
    </Link>
  );
};

export default IconCard;
