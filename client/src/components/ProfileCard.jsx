const ProfileCard = ({ children, position }) => {
  return (
    <section
      className={`relative ${
        position === 'horizontal' ? 'flex gap-4 items-center' : ''
      } py-4 px-3 rounded-sm bg-dark-2 mb-3 mt-2 border-[1px] border-dark-1-border`}
    >
      {children}
    </section>
  );
};

export default ProfileCard;
