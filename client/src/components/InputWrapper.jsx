const InputWrapper = ({ children, id, label, error }) => {
  return (
    <>
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
    </>
  );
};

export default InputWrapper;
