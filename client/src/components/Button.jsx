const Button = ({ children }) => {
  return (
    <button className='bg-light-1 rounded-md font-semibold py-2 mt-4'>
      {children}
    </button>
  );
};

export default Button;
