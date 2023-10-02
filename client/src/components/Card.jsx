const Card = ({ children, position }) => {
  return (
    <section
      className={`relative ${
        position === 'horizontal' ? 'flex gap-4 items-center lg:gap-8' : ''
      } py-4 px-3 rounded-sm bg-dark-2 mb-3 mt-2 border-[1px] border-dark-1-border lg:pb-8 lg:px-8`}
    >
      {children}
    </section>
  );
};

export default Card;
