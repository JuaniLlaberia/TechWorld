import {
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlineBriefcase,
  HiHome,
  HiBriefcase,
  HiMagnifyingGlass,
  HiOutlineNewspaper,
  HiNewspaper,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import ProfileBtn from './ProfileBtn';
import logo from '/logo1.png';
import logo2 from '/logo2.png';

const items = [
  {
    iconInactive: <HiOutlineHome />,
    iconActive: <HiHome />,
    path: '/',
    text: 'Home',
  },
  {
    iconActive: <HiMagnifyingGlass />,
    iconInactive: <HiOutlineMagnifyingGlass />,
    path: '/search',
    text: 'Search',
  },
  {
    iconActive: <HiBriefcase />,
    iconInactive: <HiOutlineBriefcase />,
    path: '/jobs',
    text: 'Jobs',
  },
  {
    iconActive: <HiNewspaper />,
    iconInactive: <HiOutlineNewspaper />,
    path: '/articles',
    text: 'Articles',
  },
];

const Navigation = () => {
  return (
    <nav className='fixed bottom-0 mx-auto mb-2 rounded-2xl  bg-dark-1 w-[95%] shadow-lg shadow-[#4b4a4a67] h-16 border z-50 border-dark-1-border lg:left-0 lg:mb-0 lg:bottom-0 lg:rounded-none lg:rounded-r-xl lg:h-[100%] lg:border-t-0 lg:border-r-2 lg:w-24 2xl:w-64'>
      <Link
        to='/'
        className='lg:flex lg:justify-center lg:py-6 lg:mb-10'
        aria-label='Go home'
      >
        <img
          src={logo}
          className='hidden w-auto h-auto 2xl:block'
          alt='Logo'
        />
        <img
          src={logo2}
          className='hidden w-auto h-auto lg:block 2xl:hidden'
          alt='Logo'
        />
      </Link>
      <ul className='flex justify-between px-8 items-center h-full text-white lg:flex-col lg:justify-center lg:gap-8 lg:h-fit 2xl:items-start'>
        {items.map((item, i) => (
          <NavItem
            key={i}
            iconActive={item.iconActive}
            iconInactive={item.iconInactive}
            path={item.path}
            text={item.text}
          />
        ))}
        <ProfileBtn />
      </ul>
    </nav>
  );
};

export default Navigation;
