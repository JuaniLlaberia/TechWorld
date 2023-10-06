import {
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlinePlusCircle,
  HiOutlineBriefcase,
} from 'react-icons/hi2';
import defaultUserImg from '/default.jpg';
import NavItem from './NavItem';

const items = [
  { icon: <HiOutlineHome />, path: '/', text: 'Home' },
  { icon: <HiOutlineBriefcase />, path: '/jobs', text: 'Jobs' },
  { icon: <HiOutlineMagnifyingGlass />, path: '/search', text: 'Search' },
  { icon: <HiOutlinePlusCircle />, path: '/new', text: 'Add job' },
];

const Navigation = () => {
  return (
    <nav className='fixed left-0 bottom-0 bg-dark-2 w-[100%] h-16 border-t-2 z-50 border-dark-1-border lg:h-[100%] lg:border-t-0 lg:border-r-2 lg:w-24 2xl:w-64'>
      <h1 className='hidden text-center mb-16 lg:block'>LOGO</h1>
      <ul className='flex justify-between px-8 items-center h-full text-white lg:flex-col lg:justify-center lg:gap-8 lg:h-fit 2xl:items-start'>
        {items.map((item, i) => (
          <NavItem key={i} icon={item.icon} path={item.path} text={item.text} />
        ))}
        <NavItem
          icon={<img src={defaultUserImg} className='w-8 rounded-full' />}
          path='/me/information'
          text='My profile'
        />
      </ul>
    </nav>
  );
};

export default Navigation;
