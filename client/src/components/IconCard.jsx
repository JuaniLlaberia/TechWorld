import { Link } from 'react-router-dom';

const IconCard = ({ icon, text, path }) => {
  return (
    <Link
      to={path}
      className='px-3 bg-dark-2 h-32 rounded-md flex flex-col items-center justify-center border-[1px] border-dark-1-border'
    >
      <span className='text-light-1 text-4xl'>{icon}</span>
      <h2 className='text-light-1 text-lg'>{text}</h2>
    </Link>
  );
};

export default IconCard;
