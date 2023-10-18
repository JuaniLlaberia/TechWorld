import Button from '../components/Button';

const ErrorPage = () => {
  return (
    <main className='bg-dark-1 h-[100vh]'>
      <section className='text-center pt-6'>
        <h1 className='text-light-1 text-2xl font-semibold mb-2 2xl:text-4xl'>
          Something went wrong!
        </h1>
        <p className='text-light-2 text-sm mb-6 2xl:text-lg'>
          Please try refreshing the page or return home to try again.
        </p>
        <Button onClick={() => window.location.replace('/')}>Go home</Button>
      </section>
    </main>
  );
};

export default ErrorPage;
