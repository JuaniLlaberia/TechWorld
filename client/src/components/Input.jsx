const Input = ({ id, register, ...props }) => {
  return (
    <input
      className='rounded-[5px] h-10 p-2 text-base bg-[transparent] shadow-sm shadow-light-3 w-full text-light-1 border-[1px] border-light-3 outline-none focus:border-light-1 2xl:h-14 2xl:text-xl placeholder:text-sm placeholder:text-light-3'
      id={id}
      {...register}
      {...props}
    />
  );
};

export default Input;
