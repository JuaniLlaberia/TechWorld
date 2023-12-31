import { ClipLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import InputWrapper from '../../components/InputWrapper';
import Button from '../../components/Button';
import { useLogin } from './useLogin';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { login, isLoading } = useLogin();

  const onSubmit = ({ email, password }) => {
    login({ email, password }, { onError: () => reset() });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='h-[70vh] w-[50vw] max-w-[650px] min-w-[300px] rounded-lg flex flex-col p-4'
    >
      <h1 className='text-light-1 font-bold text-xl 2xl:text-[2.5rem] 2xl:mb-7'>
        Log into your account
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
      <div className='relative'>
        <InputWrapper
          label='Password'
          error={errors.password?.message}
          id='password'
        >
          <Input
            autoComplete='on'
            type='password'
            id='password'
            register={register('password', {
              required: 'Must provide password',
            })}
          />
        </InputWrapper>
        <Link
          className='text-secondary-1 mt-2 xl:text-xl absolute top-[-7.5%] right-1'
          to='/forgot-password'
        >
          Forgot?
        </Link>
      </div>
      <br />
      <Button>
        {isLoading ? <ClipLoader size={17.5} color='#1F1F1F' /> : 'Log In'}
      </Button>

      <p className='text-light-3 text-center mt-2 xl:text-xl'>
        Dont't have an account?{' '}
        <Link to='/signup' className='text-secondary-1 font-semibold underline'>
          Click here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
