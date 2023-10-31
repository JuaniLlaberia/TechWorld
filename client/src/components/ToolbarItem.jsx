const ToolbarItem = ({ icon, method, condition }) => {
  const handleClick = e => {
    e.preventDefault();
    method();
  };

  return (
    <li className='text-light-2 text-xl lg:text-2xl 2xl:text-3xl'>
      <button
        className={`p-1 md:hover:bg-[#3b3b3b] rounded-md md:transition-colors ${
          condition ? 'text-light-1 bg-[#3b3b3b]' : ''
        }`}
        onClick={handleClick}
      >
        {icon}
      </button>
    </li>
  );
};

export default ToolbarItem;
