import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'myemail@email.com',
  });

  const { username, email } = formState;

  const onChange = ({ target }) => {
    // console.log(target);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {}, []);

  useEffect(() => {
    // console.log('formState changed');
  }, [formState]);

  // changed email
  useEffect(() => {
    // console.log('email changed');
  }, [email]);

  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8 space-y-5 grid'>
      <h1 className='text-lg font-bold tracking-tight text-gray-300 sm:text-3xl'>
        Formulario Simple
      </h1>
      <hr />
      <input
        type='text'
        className='bg-slate-100 rounded-md p-2 border border-slate-600 text-gray-700'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onChange}
      />

      <input
        type='email'
        className='bg-slate-100 rounded-md p-2 border border-slate-600 text-gray-700'
        placeholder='email'
        name='email'
        value={email}
        onChange={onChange}
      />

      {username === 'strider2' && <Message />}
    </div>
  );
};
