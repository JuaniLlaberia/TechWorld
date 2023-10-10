import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ItemsList from '../../components/ItemsList';
import SaveBtn from '../../components/SaveBtn';
import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import ExperienceItem from './ExperienceItem';
import Calendar from '../../components/Calendar';
import { useUpdateMe } from './useUpdateMe';

const UpdateShowExperiences = ({ onClose, current, type = 'view' }) => {
  const { updateProfile, isUpdating } = useUpdateMe();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [items, setItems] = useState(current);

  //Handle state from custom calendar
  const [from, setFrom] = useState('');
  const [until, setUntil] = useState('');

  const handleRemoveItem = value => {
    const filteredList = [...items].filter(el => el !== value);
    setItems(filteredList);
  };

  const handleSubmitAdd = data => {
    const experiences = [...current, { ...data, from, until }];
    updateProfile({ experience: experiences });
    onClose();
  };

  const handleSave = () => {
    updateProfile({ experience: items });
    onClose();
  };

  //RENDER LIST
  if (type === 'view')
    return (
      <>
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
          <div className='md:grid md:grid-cols-2 md:gap-2'>
            <InputWrapper
              error={errors?.from?.message}
              label='From'
              id='from'
            >
              <Calendar
                id='from'
                handleChange={selected => setFrom(selected)}
              />
            </InputWrapper>
            <InputWrapper
              error={errors?.until?.message}
              label='Until'
              id='until'
            >
              <Calendar
                id='until'
                handleChange={selected => setUntil(selected)}
              />
            </InputWrapper>
          </div>
          <p className='text-light-3 text-sm lg:text-lg'>
            (Empty 'Until' means present)
          </p>
          <InputWrapper
            error={errors?.reference?.message}
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
