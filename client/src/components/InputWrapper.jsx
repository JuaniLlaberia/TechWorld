const InputWrapper = ({ children, id, label, error }) => {
  return (
    <div className='my-1.5'>
      <label
        htmlFor={id}
        className='text-light-3 text-sm focus-within:text-light-1'
      >
        {label}
        {children}
      </label>
      {error ? <p className='text-sm text-[#f25544]'>{error}</p> : null}
    </div>
  );
};

export default InputWrapper;
