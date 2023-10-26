import { useForm } from 'react-hook-form';
import { useUpdateMe } from './useUpdateMe';

import Input from '../../components/Input';
import InputWrapper from '../../components/InputWrapper';
import SaveBtn from '../../components/SaveBtn';
import { useState } from 'react';

const UpdateProfileForm = ({ onClose, current, image }) => {
  const { updateProfile, isUpdating } = useUpdateMe();
  const [photo, setPhoto] = useState(image);
  const [previewPhoto, setPreviewPhoto] = useState(image);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: current,
  });

  const onSubmit = data => {
    const formData = new FormData();

    formData.append('userImg', photo);
    formData.append('fullName', data.fullName);
    formData.append('profession', data.profession);
    formData.append('location', data.location);

    updateProfile(formData, { onSuccess: () => onClose() });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-1'
      encType='multipart/form-data'
    >
      <label htmlFor='profile-image'>
        <img
          src={previewPhoto}
          className='rounded-full object-cover object-center w-24 h-24 m-auto border-[1px] border-light-2 lg:w-40 lg:h-40'
          alt='profile picture'
        />
      </label>
      <Input
        accept='image/*'
        id='profile-image'
        type='file'
        className='hidden'
        onChange={e => {
          setPreviewPhoto(URL.createObjectURL(e.target.files[0]));
          setPhoto(e.target.files[0]);
        }}
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
      <InputWrapper
        id='location'
        label='Based on'
        error={errors?.profession?.message}
      >
        <Input
          id='location'
          type='text'
          register={register('location', {
            required: `Where are you based?`,
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
