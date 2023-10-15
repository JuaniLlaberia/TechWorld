const FilterItem = ({ value, radioGroup, register }) => {
  return (
    <label className='flex gap-2 mb-2 lg:text-xl xl:text-2xl cursor-pointer'>
      <input
        className='w-8 lg:w-6 accent-secondary-1 cursor-pointer'
        type='radio'
        id={value}
        name={radioGroup}
        {...register}
        value={value}
      />
      {value}
    </label>
  );
};

export default FilterItem;
