const Button = ({ children, color, full, ...props }) => {
  return (
    <button
      className={`transition duration-200 ease-in ${
        color === 'inverted'
          ? 'bg-dark-2 text-light-1 outline outline-1 hover:bg-[#312f2f] outline-light-3'
          : color === 'alert'
          ? 'bg-[#f03b3b]'
          : 'bg-light-1 text-dark-1 hover:bg-[#e6e5e5dd]'
      } ${full && 'w-full lg:w-auto px-6'} 
       min-w-[100px] rounded-md font-semibold py-2 lg:text-lg xl:text-xl 2xl:text-2xl 2xl:py-3 2xl:px-6
        disabled:bg-dark-2 disabled:text-light-3 disabled:border disabled:border-light-3 disabled:cursor-not-allowed
       `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
