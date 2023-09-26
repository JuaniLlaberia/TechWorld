import { useEffect } from 'react';
import { useVerifyEmail } from '../../hooks/useVerifyEmail';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
import Button from '../../components/Button';

export const AccountVerification = () => {
  const { token } = useParams();
  const { verify, error } = useVerifyEmail();

  //FIX THIS IMPLEMENTATION
  useEffect(() => {
    verify(token);
  }, [token]);

  if (error)
    return (
      <section className='w-[50vw] min-w-[300px] rounded-md flex flex-col justify-center p-4 bg-dark-2 absolute z-10'>
        <h1 className='text-light-1 mb-4 font-bold text-2xl flex justify-center items-center gap-2'>
          Warning{' '}
          <span className='text-3xl'>
            <HiOutlineExclamationTriangle />
          </span>
        </h1>
        <h2 className='text-light-2 text-base'>
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
