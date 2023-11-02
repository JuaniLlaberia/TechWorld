const Tag = ({ bg = 'light', children }) => {
  return (
    <li
      className={`${
        bg === 'dark' ? 'bg-dark-1 text-light-1' : 'bg-dark-2 text-light-2'
      } py-1 px-3 rounded-xl text-sm lg:text-base`}
    >
      {children}
    </li>
  );
};

export default Tag;
