import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { useState } from 'react';
import Button from '../../components/Button';
import JobsForm from './JobsForm';
import { useUpdatejob } from './useUpdatejob';

const UpdateJob = ({ onClose, jobToEdit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: jobToEdit,
  });

  const { updateJob, isUpdating } = useUpdatejob();

  const [isChecked, setIsChecked] = useState(jobToEdit.applicationUs);

  const onSubmit = data => {
    updateJob(
      {
        ...data,
        applicationUs: !isChecked,
        user: jobToEdit.user,
      },
      {
        onSuccess: onClose(),
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='overflow-y-scroll h-[80vh] px-3'
    >
      <JobsForm
        register={register}
        errors={errors}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <div className='flex justify-end mt-6 mb-3'>
        <Button
          full={true}
          disabled={isUpdating || !isValid}
        >
          {isUpdating ? <ClipLoader size={20} /> : 'Update job'}
        </Button>
      </div>
    </form>
  );
};

export default UpdateJob;
