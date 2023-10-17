import { ClipLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import InputWrapper from '../../components/InputWrapper';
import Button from '../../components/Button';
import { useResendConf } from './useResendConf';

const ResendEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { sendEmail, isLoading } = useResendConf();

  const onSubmit = ({ email }) => {
    sendEmail(email, { onSettled: reset() });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' h-[70vh] w-[50vw] min-w-[300px] max-w-[650px] rounded-lg flex flex-col p-4'
    >
      <h1 className='text-light-1 font-bold text-xl 2xl:text-4xl 2xl:mb-7'>
        Send verification email
      </h1>
      <InputWrapper
        label='Email address'
        error={errors.email?.message}
        id='email'
      >
        <Input
          type='email'
          id='email'
          register={register('email', { required: 'Must provide email' })}
        />
      </InputWrapper>

      <Button>
        {isLoading ? (
          <ClipLoader
            size={17.5}
            color='#1F1F1F'
          />
        ) : (
          'Send email'
        )}
      </Button>
      <p className='text-light-3 mt-2 xl:text-xl'>
        Already registered?{' '}
        <Link
          to='/login'
          className='text-secondary-1 font-semibold underline'
        >
          Log in
        </Link>
      </p>
    </form>
  );
};

export default ResendEmail;
