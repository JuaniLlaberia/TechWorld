import { HiOutlineXMark } from 'react-icons/hi2';

export const SkillItem = ({ el, handleRemoveItem }) => {
  return (
    <li className='flex justify-between text-light-1 font-semibold border-b-[1px] border-dark-1-border py-2 px-1 last:border-0 last:pb-0 lg:text-xl lg:py-4'>
      {el}
      {handleRemoveItem ? (
        <button
          aria-label='delete'
          className='bg-[#58575775] p-1 rounded-full'
          onClick={() => handleRemoveItem(el)}
        >
          <HiOutlineXMark />
        </button>
      ) : null}
    </li>
  );
};
