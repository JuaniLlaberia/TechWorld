const ItemSkeleton = ({ amount }) => {
  return (
    <ul className='mt-4 w-full max-w-[750px]'>
      {Array(amount)
        .fill(0)
        .map((_, i) => (
          <li
            key={i}
            className='bg-dark-2 rounded-md p-4 w-full list-none mb-3'
          >
            <div className='animate-pulse flex space-x-4'>
              <div className='rounded-full bg-[#464444] h-16 w-16'></div>
              <div className='flex-1 mt-2 space-y-3 py-1'>
                <div className='h-2 bg-[#464444] rounded'></div>
                <div className='space-y-3'>
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='h-2 bg-[#464444] rounded col-span-2'></div>
                    <div className='h-2 bg-[#464444] rounded col-span-1'></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ItemSkeleton;
