const InputWrapper = ({ children, id, label, error }) => {
  return (
    <div className=' relative my-1.5 2xl:mt-5'>
      <label
        htmlFor={id}
        className='text-light-3 text-sm focus-within:text-light-1 xl:text-xl'
      >
        {label}
        {children}
      </label>
      {error ? (
        <p className='text-sm text-[#f25544] xl:text-base'>{error}</p>
      ) : null}
    </div>
  );
};

export default InputWrapper;
