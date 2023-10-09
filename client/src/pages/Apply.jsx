import { useParams } from 'react-router-dom';
import InputWrapper from '../components/InputWrapper';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuthContext } from '../context/AuthContext';
import { HiOutlineArrowUpTray } from 'react-icons/hi2';

const Apply = () => {
  const { jobId } = useParams();
  const { user } = useAuthContext();

  return (
    <>
      <h1 className='text-light-1 text-xl font-semibold mb-3'>
        Submit application
      </h1>
      <InputWrapper label='Email address'>
        <Input
          disabled
          defaultValue={user.data.email}
        />
      </InputWrapper>
      <InputWrapper label='Full name'>
        <Input
          disabled
          defaultValue={user.data.fullName}
        />
      </InputWrapper>
      <InputWrapper label='Extra comments'>
        <textarea className='rounded-[5px] h-32 p-2 text-base bg-[transparent] shadow-sm shadow-light-3 w-full text-light-1 border-[1px] border-light-3 outline-none focus:border-light-1 2xl:h-14 2xl:text-xl placeholder:text-sm placeholder:text-light-3 lg:placeholder:text-lg' />
      </InputWrapper>
      <label
        className='text-light-1 flex items-center justify-center gap-1 mb-8 border border-light-3 rounded-md py-2'
        htmlFor='cv'
      >
        <span>
          <HiOutlineArrowUpTray size={25} />
        </span>
        Upload your curriculum (CV)
      </label>
      <input
        accept='application/pdf'
        id='cv'
        type='file'
        className='hidden'
      />
      <Button full={true}>Send</Button>
    </>
  );
};

export default Apply;
