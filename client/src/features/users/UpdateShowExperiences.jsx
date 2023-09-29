import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ItemsList from '../../components/ItemsList';
import SaveBtn from '../../components/SaveBtn';
import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import ExperienceItem from './ExperienceItem';
import { useUpdateMe } from '../../hooks/useUpdateMe';

const UpdateShowExperiences = ({ onClose, current, type = 'view' }) => {
  const { updateProfile, isUpdating } = useUpdateMe();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [items, setItems] = useState(current);

  const handleRemoveItem = value => {
    const filteredList = [...items].filter(el => el !== value);
    setItems(filteredList);
  };

  const handleSubmitAdd = data => {
    const experiences = [...current, data];
    updateProfile({ experience: experiences });
    onClose();
  };

  const handleSave = () => {
    updateProfile({ experience: items });
    onClose();
  };

  const maxDate = new Date().toISOString().split('T')[0];

  //RENDER LIST
  if (type === 'view')
    return (
      <>
        <h1 className='text-light-2 font-semibold mb-3 lg:text-xl'>
          All your experiences
        </h1>
        <ItemsList
          items={items}
          render={el => (
            <ExperienceItem
              el={el}
              key={el._id}
              handleRemove={handleRemoveItem}
            />
          )}
        />
        <SaveBtn
          isUpdating={isUpdating}
          onClick={handleSave}
        />
      </>
    );

  //RENDER FORM
  if (type === 'form')
    return (
      <>
        <h1 className='text-light-2 font-semibold mb-3 lg:text-xl'>
          Add more experiences
        </h1>
        <form
          className='flex flex-col'
          onSubmit={handleSubmit(handleSubmitAdd)}
        >
          <InputWrapper
            error={errors?.position?.message}
            label='Position'
            id='position'
          >
            <Input
              id='position'
              type='text'
              register={register('position', {
                required: 'Please provide the position',
              })}
            />
          </InputWrapper>
          <InputWrapper
            error={errors?.company?.message}
            label='Company'
            id='company'
          >
            <Input
              id='company'
              type='text'
              register={register('company', {
                required: 'Please provide the company',
              })}
            />
          </InputWrapper>
          <div className='flex gap-4'>
            <InputWrapper
              error={errors?.from?.message}
              label='From'
              id='from'
            >
              <Input
                id='from'
                type='date'
                max={maxDate}
                register={register('from', {
                  required: 'Start date',
                })}
              />
            </InputWrapper>
            <InputWrapper
              error={errors?.until?.message}
              label='Until'
              id='until'
            >
              <Input
                id='until'
                type='date'
                max={maxDate}
                register={register('until')}
              />
            </InputWrapper>
          </div>
          <p className='text-light-3 text-sm'>(Empty 'Until' means present)</p>
          <InputWrapper
            error={errors?.url?.message}
            label='Reference'
            id='url'
          >
            <Input
              id='url'
              type='text'
              placeholder='Comapny or Web URL'
              register={register('reference', {
                required: 'Please provide an URL',
              })}
            />
          </InputWrapper>
          <SaveBtn isUpdating={isUpdating} />
        </form>
      </>
    );
};

export default UpdateShowExperiences;
