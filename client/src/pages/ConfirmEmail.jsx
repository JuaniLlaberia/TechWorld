import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { ClipLoader } from 'react-spinners';

const ConfirmEmail = () => {
  return (
    <div className='w-[50vw] min-w-[300px] rounded-sm flex flex-col justify-center p-4 bg-dark-2'>
      <h1 className='text-xl font-semibold text-light-1 mb-2 text-center'>
        Verify your email address
      </h1>
      <p className='text-light-2 mb-4 text-justify'>
        We sent an email containing the instructions to finish your sign up. You
        are almost there!
      </p>
      <p className='text-light-1'>
        Didn't receive the email?{' '}
        <Link className='font-semibold underline text-[pink]'>Send email</Link>
      </p>
    </div>
  );
};

export default ConfirmEmail;
