import { ClipLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import InputWrapper from '../../components/InputWrapper';
import Button from '../../components/Button';
import { useResetPassword } from './useResetPassword';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { resetPassword, isLoading } = useResetPassword();

  const onSubmit = ({ password, passwordConfirm }) => {
    resetPassword({ password, passwordConfirm }, { onError: () => reset() });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' h-[70vh] w-[50vw] max-w-[650px] min-w-[300px] rounded-lg flex flex-col p-4'
    >
      <h1 className='text-light-1 font-bold text-xl 2xl:text-4xl 2xl:mb-7'>
        Create new password
      </h1>
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
            required: 'Must confirm your password',
          })}
        />
      </InputWrapper>
      <Button>
        {isLoading ? <ClipLoader size={17.5} color='#1F1F1F' /> : 'Submit'}
      </Button>
    </form>
  );
};

export default ResetPassword;
