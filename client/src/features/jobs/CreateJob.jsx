import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { useState } from 'react';
import Button from '../../components/Button';
import JobsForm from './JobsForm';
import { useCreateJob } from './useCreateJob';
import { useAuthContext } from '../../context/AuthContext';

const CreateJob = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm();
  const { createJob, isCreating } = useCreateJob();
  const { user } = useAuthContext();

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = data => {
    createJob({
      ...data,
      applicationUs: !isChecked,
      user: user?.data._id,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='pt-1 pb-24 mt-2 lg:pb-10'
    >
      <h1 className='text-light-1 text-4xl mt-2 lg:text-5xl'>
        Let's set up a{' '}
        <span className='text-secondary-1 uppercase font-semibold'>job</span>{' '}
        offer
      </h1>
      <JobsForm
        register={register}
        errors={errors}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <div className='flex justify-end mt-6'>
        <Button
          full={true}
          disabled={isCreating || !isValid}
        >
          {isCreating ? <ClipLoader size={20} /> : 'Create job'}
        </Button>
      </div>
    </form>
  );
};

export default CreateJob;
