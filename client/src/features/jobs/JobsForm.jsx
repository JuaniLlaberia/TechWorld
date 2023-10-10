import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { useState } from 'react';
import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import {
  filterExperience,
  filterJobPlace,
  filterJobType,
} from '../../utils/filters';
import { useCreateJob } from './useCreateJob';
import { useAuthContext } from '../../context/AuthContext';

const JobsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { createJob, isCreating } = useCreateJob();
  const { user } = useAuthContext();

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = data => {
    createJob({
      name: data.name,
      position: data.position,
      location: data.location,
      level: data.level,
      type: data.type,
      workPlace: data.workPlace,
      description: data.description,
      applicationUs: isChecked,
      companyUrl: data.url,
      user: user?.data._id,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='pt-4 pb-8 px-5 rounded-md bg-dark-2 mt-2 border border-dark-1-border'
    >
      <h1 className='text-light-1 text-xl font-semibold mt-2 xl:text-2xl'>
        Create a new job
      </h1>
      <InputWrapper
        error={errors?.name?.message}
        label='Position title'
        id='name'
      >
        <Input
          id='name'
          register={register('name', { required: 'A job must have a name' })}
        />
      </InputWrapper>

      <InputWrapper
        error={errors?.position?.message}
        label='Position field'
        id='position'
      >
        <Input
          id='position'
          register={register('position', {
            required: 'A job must have a position',
          })}
        />
      </InputWrapper>

      <InputWrapper
        error={errors?.location?.message}
        label='Location'
        id='location'
      >
        <Input
          id='location'
          register={register('location', {
            required: 'A job must have a location',
          })}
        />
      </InputWrapper>

      <InputWrapper
        error={errors?.level?.message}
        label='Experience level'
        id='level'
      >
        <Select
          id='level'
          register={register('level', {
            validate: false,
          })}
        >
          {filterExperience.map(el => (
            <option
              key={el}
              className='bg-dark-1 text-light-1'
              value={el}
            >
              {el !== 'All' ? el : 'Select option'}
            </option>
          ))}
        </Select>
      </InputWrapper>

      <div className='grid grid-cols-2 gap-2'>
        <InputWrapper
          error={errors?.type?.message}
          label='Job type'
          id='type'
        >
          <Select
            id='type'
            register={register('type', {
              required: 'A job must have a type',
            })}
          >
            {filterJobType.map(el => (
              <option
                key={el}
                className='bg-dark-1 text-light-1 '
              >
                {el !== 'All' ? el : 'Select option'}
              </option>
            ))}
          </Select>
        </InputWrapper>
        <InputWrapper
          label='Workplace type'
          id='workPlace'
          error={errors?.workplace?.message}
        >
          <Select
            id='workPlace'
            register={register('workPlace', {
              required: 'A job must have a workPlace',
            })}
          >
            {filterJobPlace.map(el => (
              <option
                key={el}
                className='bg-dark-1 text-light-1 '
              >
                {el !== 'All' ? el : 'Select option'}
              </option>
            ))}
          </Select>
        </InputWrapper>
      </div>

      <InputWrapper
        error={errors?.description?.message}
        label='Description'
        id='description'
      >
        <textarea
          {...register('description', {
            required: 'A job must have a description',
          })}
          className='rounded-[5px] h-32 p-2 text-base bg-[transparent] shadow-sm shadow-light-3 w-full text-light-1 border-[1px] border-light-3 outline-none focus:border-light-1 2xl:h-14 2xl:text-xl placeholder:text-sm placeholder:text-light-3 lg:placeholder:text-lg'
        />
      </InputWrapper>

      <div className='flex gap-3 mb-1 items-center'>
        <p className='text-light-1 xl:text-xl'>Custom application form?</p>
        <input
          value={isChecked}
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
          type='checkbox'
          className='w-6 h-6 rounded-lg'
        />
      </div>
      {isChecked && (
        <InputWrapper
          error={errors?.url?.message}
          label='Company URL'
          id='url'
        >
          <Input
            placeholder='Your own application url'
            id='url'
            register={register('url', {
              required: 'Must input an url',
            })}
          />
        </InputWrapper>
      )}
      <br />
      <Button full={true}>
        {isCreating ? <ClipLoader size={20} /> : 'Post'}
      </Button>
    </form>
  );
};

export default JobsForm;
