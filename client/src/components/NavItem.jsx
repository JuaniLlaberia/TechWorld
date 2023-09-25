import { NavLink } from 'react-router-dom';

const NavItem = ({ icon, path }) => {
  return (
    <li className='text-light-2 relative'>
      <NavLink to={path}>{icon}</NavLink>
    </li>
  );
};

export default NavItem;
