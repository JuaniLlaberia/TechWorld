const Button = ({ children, ...props }) => {
  return (
    <button
      className='bg-light-1 rounded-md font-semibold py-2 mt-4 xl:text-xl 2xl:text-2xl 2xl:py-3'
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
