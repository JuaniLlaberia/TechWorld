import { Link } from 'react-router-dom';

const ConfirmEmailPopup = () => {
  return (
    <>
      <div className='w-[50vw] min-w-[300px] rounded-md flex flex-col justify-center p-4 bg-dark-1 absolute z-10'>
        <h1 className='text-xl font-semibold text-light-1 mb-4 text-center'>
          Verify your email address
        </h1>
        <p className='text-light-2 mb-6 text-justify'>
          We sent an email containing the instructions to finish your sign up
          process. We are waiting for the confirmation.
        </p>
        <p className='text-light-2 text-sm'>
          Didn't receive the email?{' '}
          <Link className='font-semibold underline text-light-1'>
            Resend email
          </Link>
        </p>
      </div>
      <div className='fixed bg-[#41404067] w-full h-full'></div>
    </>
  );
};

export default ConfirmEmailPopup;
