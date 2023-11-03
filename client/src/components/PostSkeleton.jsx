const PostSkeleton = () => {
  return (
    <>
      <div className='bg-dark-2 rounded-md p-4 w-full list-none my-1 h-[100vh] md:h-fit'>
        <div className='animate-pulse mt-6 flex space-x-4'>
          <div className='flex-1 mt-2 space-y-3 '>
            <div className='h-4 bg-[#464444] rounded'></div>
            <div className='h-4 bg-[#464444] rounded'></div>
            <div className='grid grid-cols-3 gap-3'>
              <div className='h-2 bg-[#464444] rounded col-span-2'></div>
              <div className='h-2 bg-[#464444] rounded col-span-1'></div>
              <div className='h-2 bg-[#464444] rounded col-span-2'></div>
              <div className='h-2 bg-[#464444] rounded col-span-1'></div>
              <div className='h-32 bg-[#464444] rounded col-span-3'></div>
              <div className='h-32 bg-[#464444] rounded col-span-3'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostSkeleton;
