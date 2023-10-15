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
      className='relative flex justify-center items-center mb-6 w-full h-10 lg:w-auto lg:min-w-[600px] lg:py-4 lg:h-14 lg:mt-2'
    >
      <input
        ref={inputRef}
        placeholder='Search for you ideal job...'
        className='w-full h-10 py-2 pl-12 rounded-md text-light-1 bg-transparent border-[1px] border-dark-1-border focus:border-light-3 placeholder:text-light-3 lg:text-lg 2xl:text-xl lg:h-14'
      />
      <HiOutlineMagnifyingGlass
        className='absolute text-light-3 left-4'
        size={25}
      />
    </form>
  );
};
