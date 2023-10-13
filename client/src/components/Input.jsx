const Input = ({ id, register, ...props }) => {
  return (
    <input
      className='rounded-[5px] h-10 p-2 mt-1.5 text-base bg-[transparent] shadow-sm shadow-light-3 w-full text-light-1 border-[1px] border-light-3 outline-none focus:border-light-1 2xl:h-14 2xl:text-xl placeholder:text-sm placeholder:text-light-3 lg:placeholder:text-lg disabled:bg-[#57565673] disabled:text-light-3 disabled:cursor-not-allowed hover:bg-dark-1-border transition-colors'
      id={id}
      {...register}
      {...props}
    />
  );
};

export default Input;
