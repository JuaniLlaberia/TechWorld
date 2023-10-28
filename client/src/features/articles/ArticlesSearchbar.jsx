import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

const ArticlesSearchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();

  const handleSearch = e => {
    e.preventDefault();

    searchParams.set('searchQuery', inputRef.current.value.trim());
    setSearchParams(searchParams);
  };

  return (
    <form
      onSubmit={handleSearch}
      className='flex justify-center items-center mb-4 w-full relative h-10 xl:h-14 xl:mt-2'
    >
      <input
        defaultValue={searchParams.get('searchQuery')}
        placeholder='Search keyword or tags'
        ref={inputRef}
        className='w-full max-w-[600px] h-10 py-2 px-4 rounded-l-xl text-light-1 bg-transparent border-[1px] border-light-3 outline-1 placeholder:text-light-3 outline-light-3 xl:text-lg 2xl:text-xl xl:h-14'
      />
      <button
        aria-label='search'
        className='flex items-center gap-2 h-10 bg-light-1 text-xl text-dark-1 px-3 rounded-r-xl lg:text-base xl:text-lg 2xl:text-2xl xl:h-14 xl:px-6'
      >
        <HiOutlineMagnifyingGlass />{' '}
        <span className='hidden text-lg xl:block'>Search</span>
      </button>
    </form>
  );
};

export default ArticlesSearchbar;
