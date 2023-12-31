import { NavLink } from 'react-router-dom';

const NavItem = ({ iconActive, iconInactive, path, text }) => {
  return (
    <li className='text-light-2 relative md:hover:text-light-1 transition-colors'>
      <NavLink
        aria-label={text}
        to={path}
        className='text-3xl lg:text-4xl 2xl:flex 2xl:items-center 2xl:gap-2'
      >
        {({ isActive }) =>
          isActive ? (
            <>
              {iconActive}{' '}
              <span className='hidden text-xl 2xl:block'>{text}</span>
            </>
          ) : (
            <>
              {iconInactive}{' '}
              <span className='hidden text-xl 2xl:block'>{text}</span>
            </>
          )
        }
      </NavLink>
    </li>
  );
};

export default NavItem;
