import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ totalDocs }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [crrPage, setCrrPage] = useState(1);

  const changePage = page => {
    searchParams.set('page', crrPage - page);
    setCrrPage(prev => prev - page);
    setSearchParams(searchParams);
  };

  const setPage = page => {
    searchParams.set('page', page);
    setCrrPage(prev => page);
    setSearchParams(searchParams);
  };

  const totalPages = Math.ceil(totalDocs / 5);

  return (
    <section className='text-light-1 flex justify-between border-t border-light-3 py-2'>
      <button
        className='bg-light-1 py-1 px-2 text-dark-1 font-semibold'
        onClick={() => changePage(1)}
        disabled={crrPage === 1}
      >
        Prev page
      </button>
      <div className='flex gap-2'>
        {crrPage - 1 > 0 ? (
          <button
            onClick={() => setPage(crrPage - 1)}
            className='text-light-1 rounded-md border border-light-2 bg-dark-1 px-2 py-1 font-semibold'
          >
            {crrPage - 1}
          </button>
        ) : null}
        <button className='bg-light-1 rounded-md text-dark-1 px-2 py-1 font-semibold border'>
          {crrPage}
        </button>
        {crrPage + 1 <= totalPages ? (
          <button
            onClick={() => setPage(crrPage + 1)}
            className='text-light-1 rounded-md border border-light-2 bg-dark-1 px-2 py-1 font-semibold'
          >
            {crrPage + 1}
          </button>
        ) : null}
      </div>
      <button
        className='bg-light-1 py-1 px-2 text-dark-1 font-semibold'
        onClick={() => changePage(-1)}
        disabled={crrPage === totalPages}
      >
        Next page
      </button>
    </section>
  );
};

export default Pagination;
