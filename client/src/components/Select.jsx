const Select = ({ id, register, children, ...props }) => {
  return (
    <select
      className='rounded-[5px] h-10 p-2 text-base bg-[transparent] shadow-sm shadow-light-3 w-full text-light-1 border-[1px] border-light-3 outline-none focus:border-light-1 2xl:h-14 2xl:text-xl placeholder:text-sm placeholder:text-light-3 lg:placeholder:text-lg'
      id={id}
      {...register}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
