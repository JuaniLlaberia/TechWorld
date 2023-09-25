import {
  HiOutlineHome,
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlinePlusCircle,
} from 'react-icons/hi2';
import defaultUserImg from '/default.jpg';
import NavItem from './NavItem';

const items = [
  { icon: <HiOutlineHome size={30} />, path: '/' },
  { icon: <HiOutlineMagnifyingGlass size={30} />, path: '/search' },
  { icon: <HiOutlinePlusCircle size={30} />, path: '/new' },
  { icon: <HiOutlineBell size={30} />, path: '/notifications' },
  {
    icon: (
      <img
        src={defaultUserImg}
        className='w-8 rounded-full'
      />
    ),
    path: '/me',
  },
];

const Navigation = () => {
  return (
    <nav className='fixed left-0 bottom-0 bg-dark-2 w-[100%] h-16 border-t-2 border-dark-1-border'>
      <ul className='flex justify-between px-8 items-center h-full text-white'>
        {items.map((item, i) => (
          <NavItem
            key={i}
            icon={item.icon}
            path={item.path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
