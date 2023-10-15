import { ClipLoader } from 'react-spinners';

const FullScreenLoader = () => {
  return (
    <section className='bg-dark-1 fixed top-0 h-full w-full flex justify-center items-center'>
      <ClipLoader
        size={60}
        color='white'
      />
    </section>
  );
};

export default FullScreenLoader;
