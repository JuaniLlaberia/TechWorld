import { useEffect } from 'react';
import { useVerifyEmail } from './useVerifyEmail';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
import Button from '../../components/Button';
import { ClipLoader } from 'react-spinners';

export const AccountVerification = () => {
  const { token } = useParams();
  const { verify, error, isLoading } = useVerifyEmail();

  useEffect(() => {
    verify(token);
  }, [token]);

  if (isLoading)
    return (
      <ClipLoader
        size={25}
        color='white'
      />
    );

  if (error)
    return (
      <section className='w-[50vw] max-w-[750px] min-w-[300px] rounded-md flex flex-col justify-center p-4 bg-dark-2 absolute z-10'>
        <h1 className='text-light-1 mb-4 font-bold text-2xl flex justify-center items-center gap-2 xl:text-5xl'>
          Warning{' '}
          <span className='text-3xl xl:text-6xl'>
            <HiOutlineExclamationTriangle />
          </span>
        </h1>
        <h2 className='text-light-2 text-base xl:text-xl xl:mb-6'>
          The token has expired or is invalid. Try to confirm the email again or
          resend it.
        </h2>
        <Button
          to='/'
          as={<Link />}
        >
          Resend email
        </Button>
      </section>
    );
};
