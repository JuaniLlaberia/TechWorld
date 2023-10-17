import { ClipLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import InputWrapper from '../../components/InputWrapper';
import Button from '../../components/Button';
import { useChangePassword } from '../users/useChangePassword';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { changePassword, isLoading } = useChangePassword();

  const onSubmit = data => {
    changePassword(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' h-[70vh] w-[50vw] max-w-[650px] min-w-[300px] rounded-lg flex flex-col p-4'
    >
      <h1 className='text-light-1 font-bold text-xl 2xl:text-4xl 2xl:mb-7'>
        Change your password
      </h1>
      <InputWrapper
        label='Current password'
        error={errors.password?.message}
        id='currentPassword'
      >
        <Input
          type='password'
          id='currentPassword'
          register={register('currentPassword', {
            required: 'Must provide password',
          })}
        />
      </InputWrapper>
      <InputWrapper
        label='New password'
        error={errors.password?.message}
        id='password'
      >
        <Input
          type='password'
          id='password'
          register={register('password', {
            required: 'Must provide a new password',
          })}
        />
      </InputWrapper>
      <InputWrapper
        label='Confirm new password'
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
        {isLoading ? (
          <ClipLoader
            size={17.5}
            color='#1F1F1F'
          />
        ) : (
          'Update password'
        )}
      </Button>
    </form>
  );
};

export default ChangePassword;
