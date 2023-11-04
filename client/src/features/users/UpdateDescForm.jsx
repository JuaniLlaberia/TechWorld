import { useForm } from 'react-hook-form';
import { useUpdateMe } from './useUpdateMe';
import SaveBtn from '../../components/SaveBtn';

const UpdateDescForm = ({ onClose, current }) => {
  const { updateProfile, isUpdating } = useUpdateMe();

  const { register, handleSubmit } = useForm({
    defaultValues: { description: current || '' },
  });

  const onSubmit = data => {
    updateProfile(data, { onSuccess: () => onClose() });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-1'>
      <textarea
        placeholder='Description'
        {...register('description')}
        maxLength={500}
        className='w-full bg-[transparent] resize-y border-[1px] border-dark-1-border min-h-[100px] max-h-[300px] outline-none p-1 placeholder:text-sm lg:placeholder:text-base placeholder:text-light-2 rounded-base lg:text-xl lg:h-[500px]'
      />
      <SaveBtn isUpdating={isUpdating} />
    </form>
  );
};

export default UpdateDescForm;
