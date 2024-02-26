// import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  // use react hook form library
  // https://react-hook-form.com/
  const { username, email, password, formState, onChange, onReset } = useForm({
    username: '',
    email: '',
    password: '',
  });

  console.log(formState);

  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8 space-y-5 grid'>
      <h1 className='text-lg font-bold tracking-tight text-gray-300 sm:text-3xl'>
        onReset Formulario Simple Con CustomHook
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

      <input
        type='password'
        className='bg-slate-100 rounded-md p-2 border border-slate-600 text-gray-700'
        placeholder='password'
        name='password'
        value={password}
        onChange={onChange}
      />

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={onReset}
      >
        Borrar
      </button>
    </div>
  );
};
