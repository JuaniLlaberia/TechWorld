import { useForm } from 'react-hook-form';
import { useUpdateMe } from '../../hooks/useUpdateMe';

import Input from '../../components/Input';
import InputWrapper from '../../components/InputWrapper';
import SaveBtn from '../../components/SaveBtn';

const UpdateProfileForm = ({ onClose, current, image }) => {
  const { updateProfile, isUpdating } = useUpdateMe();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: current,
  });

  const onSubmit = data => {
    updateProfile(data);
    onClose();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-1'
    >
      <h1 className='text-light-2 font-semibold mb-3'>Personal information</h1>
      <label htmlFor='profile-image'>
        <img
          src={image}
          className='rounded-full w-24 m-auto border-[1px] border-light-2'
        />
      </label>
      <Input
        accept='image/*'
        id='profile-image'
        type='file'
        className='hidden'
      />
      <InputWrapper
        id='fullName'
        label='Full name'
        error={errors?.fullName?.message}
      >
        <Input
          id='fullName'
          type='text'
          register={register('fullName', {
            required: `What's your name?`,
            minLength: {
              value: 5,
              message: 'Min. 5 characters',
            },
          })}
        />
      </InputWrapper>
      <InputWrapper
        id='profession'
        label='Profession'
        error={errors?.profession?.message}
      >
        <Input
          id='profession'
          type='text'
          register={register('profession', {
            required: `What's your profession?`,
            minLength: {
              value: 5,
              message: 'Min. 5 characters',
            },
          })}
        />
      </InputWrapper>
      <SaveBtn isUpdating={isUpdating} />
    </form>
  );
};

export default UpdateProfileForm;
