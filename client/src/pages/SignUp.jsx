import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const SignUp = () => {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  };

  return (
    <main className='bg-dark-1 h-[100vh] flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-dark-2 h-[50vh] w-[50vw] rounded-lg flex justify-center flex-col'
      >
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='h-10'
          type='email'
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='h-10'
          type='password'
        />
        <button className='text-light-1'>Send</button>
      </form>
    </main>
  );
};

export default SignUp;
