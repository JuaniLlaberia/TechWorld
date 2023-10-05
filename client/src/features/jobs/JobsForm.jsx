import { useForm } from 'react-hook-form';
import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import {
  filterExperience,
  filterJobPlace,
  filterJobType,
} from '../../utils/filters';

const JobsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper
        error={errors?.name?.message}
        label='Position name'
        id='position'
      >
        <Input
          id='position'
          register={register('name', { required: 'A job must have a name' })}
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
      <div className='grid grid-cols-2 gap-2'>
        <InputWrapper
          error={errors?.level?.message}
          label='Level'
          id='level'
        >
          <Select
            id='level'
            register={register('level', {
              required: 'A job must have a level',
            })}
          >
            {filterExperience.map(el => (
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
          error={errors?.type?.message}
          label='Type'
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
      </div>
      <InputWrapper
        label='Type'
        id='type'
      >
        <Select id='type'>
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
      <Button full={true}>Post</Button>
    </form>
  );
};

export default JobsForm;
