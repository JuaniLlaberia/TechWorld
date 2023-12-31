import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import Select from '../../components/Select';

const JobsForm = ({ register, errors, isChecked, setIsChecked }) => {
  return (
    <>
      <InputWrapper
        error={errors?.name?.message}
        label='Job title'
        id='name'
      >
        <Input
          id='name'
          placeholder='The title the users will see'
          register={register('name', { required: 'A job must have a name' })}
        />
      </InputWrapper>

      <InputWrapper
        error={errors?.position?.message}
        label='Position'
        id='position'
      >
        <Input
          id='position'
          placeholder='Add the position you are hiring for'
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
          placeholder='Job or employees city'
          register={register('location', {
            required: 'A job must have a location',
          })}
        />
      </InputWrapper>

      <InputWrapper
        error={errors?.level?.message}
        label='Experience'
        id='level'
      >
        <Select
          id='level'
          register={register('level', {
            validate: v => {
              return v !== 'Choose a level' || 'A job must have a level';
            },
          })}
        >
          <option>Choose a level</option>
          <option value='Entry-level'>Entry-level</option>
          <option value='Mid-level'>Mid-level</option>
          <option value='Senior-level'>Senior-level</option>
          <option value='Executive'>Executive</option>
        </Select>
      </InputWrapper>

      <div className=''>
        <InputWrapper
          error={errors?.type?.message}
          label='Job type'
          id='type'
        >
          <Select
            id='type'
            register={register('type', {
              validate: v => {
                return v !== 'Choose a type' || 'A job must have a type';
              },
            })}
          >
            <option>Choose a type</option>
            <option value='Full-time'>Full-time</option>
            <option value='Part-time'>Part-time</option>
            <option value='Intership'>Intership</option>
          </Select>
        </InputWrapper>
        <InputWrapper
          label='Workplace type'
          id='workPlace'
          error={errors?.workPlace?.message}
        >
          <Select
            id='workPlace'
            register={register('workPlace', {
              validate: v => {
                return v !== 'Choose a place' || 'A job must have a place type';
              },
            })}
          >
            <option>Choose a place</option>
            <option value='On-site'>On-site</option>
            <option value='Remote'>Remote</option>
            <option value='Hybrid'>Hybrid</option>
          </Select>
        </InputWrapper>
      </div>

      <InputWrapper
        error={errors?.description?.message}
        label='Description'
        id='description'
      >
        <textarea
          placeholder='Tell the users about you and the job'
          {...register('description', {
            required: 'A job must have a description',
          })}
          className='rounded-[5px] h-32 p-2 text-base resize-y min-h-[100px] max-h-[300px] bg-[transparent] shadow-sm shadow-light-3 w-full hover:bg-dark-2 text-light-1 border-[1px] border-light-3 outline-none focus:border-light-1 2xl:h-14 2xl:text-xl placeholder:text-sm placeholder:text-light-3 lg:placeholder:text-lg'
        />
      </InputWrapper>

      <div className='flex gap-3 mb-1 items-center'>
        <label
          className='text-light-1 xl:text-xl'
          htmlFor='box'
        >
          Custom application form?
        </label>
        <input
          id='box'
          value={isChecked}
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
          type='checkbox'
          className='w-4 h-4 accent-secondary-1 rounded focus:ring-blue-500'
        />
      </div>
      <p className='text-light-2 text-sm'>
        (Use your own plataform for the applications)
      </p>

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
    </>
  );
};

export default JobsForm;
