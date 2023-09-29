const Button = ({ children, color, ...props }) => {
  return (
    <button
      className={`${
        color === 'inverted'
          ? 'bg-dark-2 text-light-1'
          : 'bg-light-1 text-dark-1'
      } min-w-[100px] rounded-md font-semibold py-2 mt-4 lg:text-lg xl:text-xl 2xl:text-2xl 2xl:py-3`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
