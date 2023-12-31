import { ClipLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import InputWrapper from '../../components/InputWrapper';
import Button from '../../components/Button';
import { useSignup } from './useSignup';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { signup, isLoading } = useSignup();

  const onSubmit = ({
    email,
    fullName,
    password,
    passwordConfirm,
    profession,
  }) => {
    const newUser = { email, fullName, password, passwordConfirm, profession };
    signup(newUser, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='h-[70vh] w-[50vw] max-w-[650px] min-w-[300px] rounded-lg flex flex-col p-4'
    >
      <h1 className='text-light-1 font-bold text-xl 2xl:text-4xl 2xl:mb-7'>
        Let's create an account
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
      <InputWrapper label='Full name' error={errors.name?.message} id='name'>
        <Input
          type='text'
          id='name'
          register={register('fullName', {
            required: 'Must provide name',
          })}
        />
      </InputWrapper>
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
      <InputWrapper
        label='Confirm password'
        error={errors.passwordConfirm?.message}
        id='passwordConfirm'
      >
        <Input
          autoComplete='on'
          type='password'
          id='passwordConfirm'
          register={register('passwordConfirm', {
            required: 'Must confirm password',
          })}
        />
      </InputWrapper>
      <InputWrapper
        label='Profession'
        error={errors.profession?.message}
        id='profession'
      >
        <Input
          type='text'
          id='profession'
          register={register('profession', {
            required: 'Must provide a profession',
          })}
        />
      </InputWrapper>
      <Button>
        {isLoading ? <ClipLoader size={17.5} color='#1F1F1F' /> : 'Create now'}
      </Button>
      <p className='text-light-3 mt-2 xl:text-xl'>
        Have an account?{' '}
        <Link to='/login' className='text-secondary-1 font-semibold underline'>
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
