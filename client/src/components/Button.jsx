const Button = ({ children, color, full, ...props }) => {
  return (
    <button
      className={`${
        color === 'inverted'
          ? 'bg-dark-2 text-light-1 outline outline-1 outline-light-3'
          : color === 'alert'
          ? 'bg-[#f03b3b]'
          : 'bg-light-1 text-dark-1'
      } ${full && 'w-full'} 
       min-w-[100px] rounded-md font-semibold py-2 lg:text-lg xl:text-xl 2xl:text-2xl 2xl:py-3`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
