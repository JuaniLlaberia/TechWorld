import { NavLink } from 'react-router-dom';

const NavItem = ({ icon, path, text }) => {
  return (
    <li className='text-light-2 relative hover:text-light-1 transition-colors'>
      <NavLink
        to={path}
        className='text-3xl lg:text-4xl 2xl:flex 2xl:items-center 2xl:gap-2'
      >
        {icon} <span className='hidden text-2xl 2xl:block'>{text}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
