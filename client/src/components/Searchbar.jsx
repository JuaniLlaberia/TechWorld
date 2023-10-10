import { useRef } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

export const Searchbar = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSearch = async e => {
    e.preventDefault();
    if (inputRef.current.value === '') return;

    navigate(`/search?searchQuery=${inputRef.current.value.trim()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className='relative flex justify-center items-center mb-6 w-full h-10 xl:h-14 xl:mt-2'
    >
      <input
        ref={inputRef}
        placeholder='Search for you ideal job...'
        className='w-full max-w-[600px] h-10 py-2 pl-10 rounded-md text-light-1 bg-transparent border-[1px] border-dark-1-border focus:border-light-3 placeholder:text-light-3 xl:text-lg 2xl:text-xl xl:h-14'
      ></input>
      <HiOutlineMagnifyingGlass
        className='absolute text-light-3 left-2'
        size={23}
      />
    </form>
  );
};
