import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import { toast } from 'sonner';
import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuthContext } from '../../context/AuthContext';
import { useApplyJob } from './useApplyJob';

const Application = () => {
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: { name: user.data?.fullName, email: user.data?.email },
  });
  const { apply, isLoading } = useApplyJob();

  const { jobId } = useParams();

  const onSubmit = data => {
    if (data.cv.length === 0) return toast.error('You have to upload your CV');

    const formData = new FormData();

    formData.append('application', data.cv[0]);
    formData.append('email', data.email);
    formData.append('name', data.name);
    formData.append('comment', data.comment);
    formData.append('link', data.link);
    formData.append('jobId', jobId);

    apply(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='lg:mt-3  mb-20 lg:mb-2'
      encType='multipart/form-data'
    >
      <h1 className='text-light-1 text-3xl lg:text-4xl 2xl:text-5xl'>
        <span className='text-secondary-1 font-semibold'>Job</span> application
      </h1>
      <h3 className='text-light-2 text-sm mb-4 lg:text-lg 2xl:text-xl'>
        We just need some extra information
      </h3>
      <InputWrapper label='Full name'>
        <Input disabled register={register('name')} />
      </InputWrapper>
      <InputWrapper label='Email address'>
        <Input disabled register={register('email')} />
      </InputWrapper>
      <InputWrapper label='Reference URL'>
        <Input
          disabled={isLoading}
          placeholder='Your porfolio, Github or similar'
          register={register('link')}
        />
      </InputWrapper>
      <InputWrapper label='Extra comments'>
        <textarea
          disabled={isLoading}
          {...register('comment')}
          className='rounded-[5px] h-32 p-2 text-base bg-[transparent] shadow-sm shadow-light-3 w-full text-light-1 border-[1px] border-light-3 outline-none resize-y min-h-[100px] max-h-[300px] focus:border-light-1 2xl:h-14 2xl:text-xl placeholder:text-sm placeholder:text-light-3 lg:placeholder:text-lg'
        />
      </InputWrapper>
      <label
        className='text-light-1 flex items-center justify-center gap-1 my-3 border border-light-3 cursor-pointer hover:bg-dark-2 transition-colors rounded-md py-2 lg:py-6 lg:text-xl lg:gap-3'
        htmlFor='cv'
      >
        <span>
          <HiOutlineArrowUpTray size={25} />
        </span>
        Upload your resume (CV)
      </label>
      <input
        {...register('cv')}
        disabled={isLoading}
        accept='application/pdf'
        id='cv'
        type='file'
        className='hidden'
      />
      <div className='flex justify-end mt-6'>
        <Button disabled={!isValid} full={true}>
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </form>
  );
};

export default Application;
