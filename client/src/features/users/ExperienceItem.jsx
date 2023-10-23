import { HiOutlineXMark } from 'react-icons/hi2';

const ExperienceItem = ({ el, handleRemove }) => {
  return (
    <li className='relative flex justify-between flex-col text-light-1 font-semibold border-b-[1px] border-dark-1-border py-2 px-1 last:border-0 last:pb-0'>
      <a
        className='lg:text-xl'
        href={el.reference}
        target='_blank'
        rel='nofollow'
      >
        {el.position}
      </a>
      <p className='text-light-2 font-normal text-sm lg:text-lg'>
        {el.company}
      </p>
      <span className='text-light-2 font-thin text-sm lg:text-lg'>
        {new Date(el.from).toLocaleDateString()} -{' '}
        {!el.until ? 'Present' : new Date(el.until).toLocaleDateString()}
      </span>
      {handleRemove ? (
        <button
          className='bg-[#58575775] p-1 rounded-full absolute right-0 bottom-[50%] translate-y-[50%] lg:text-xl'
          onClick={() => handleRemove(el)}
        >
          <HiOutlineXMark />
        </button>
      ) : null}
    </li>
  );
};

export default ExperienceItem;
