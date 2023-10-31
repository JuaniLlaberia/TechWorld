import { NavLink } from 'react-router-dom';

const ProfileTabs = () => {
  return (
    <section
      className='text-light-3 flex gap-8 border-b border-light-3 py-3 mb-4 bg-dark-2 rounded-sm xl:py-4'
      id='profile-nav'
    >
      <NavLink
        to='me/information'
        className='relative px-2 xl:text-2xl xl:px-4'
      >
        Information
      </NavLink>
      <NavLink
        to='me/saved'
        className='relative px-2 xl:text-2xl xl:px-4'
      >
        Saved
      </NavLink>
    </section>
  );
};

export default ProfileTabs;
