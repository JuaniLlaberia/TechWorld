import { ClipLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import InputWrapper from '../../components/InputWrapper';
import Button from '../../components/Button';
import { useSignup } from '../../hooks/useSignup';

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    signup(newUser);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='h-[80vh] w-[50vw] min-w-[300px] rounded-lg flex flex-col p-4'
    >
      <h1 className='text-light-1 font-bold text-xl'>Sign up to TechWorld</h1>
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
      <InputWrapper
        label='Full name'
        error={errors.name?.message}
        id='name'
      >
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
        {isLoading ? (
          <ClipLoader
            size={17.5}
            color='#1F1F1F'
          />
        ) : (
          'Create account'
        )}
      </Button>
      <p className='text-light-3 mt-2'>
        Have an account?{' '}
        <Link
          to='/'
          className='text-light-1 font-semibold underline'
        >
          Log in
        </Link>
      </p>
    </form>
  );
};
