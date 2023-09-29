import { useForm } from 'react-hook-form';
import { useUpdateMe } from '../../hooks/useUpdateMe';
import SaveBtn from '../../components/SaveBtn';

const UpdateDescForm = ({ onClose, current }) => {
  const { updateProfile, isUpdating } = useUpdateMe();

  const { register, handleSubmit } = useForm({
    defaultValues: { description: current || '' },
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
      <h1 className='text-light-2 font-semibold mb-3 lg:text-xl'>
        Tell us about you
      </h1>
      <textarea
        placeholder='Description'
        {...register('description')}
        maxLength={500}
        className='w-full bg-[transparent] border-[1px] border-dark-1-border min-h-[100px] max-h-[300px] outline-none p-1 placeholder:text-sm rounded-md lg:text-xl'
      />
      <SaveBtn isUpdating={isUpdating} />
    </form>
  );
};

export default UpdateDescForm;
