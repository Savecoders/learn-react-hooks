import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <div className='p-4 flex flex-col justify-center align-middle gap-4 max-w-[1200px]'>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type='text'
        className='border-2 border-gray-300 rounded p-3'
        ref={inputRef}
        placeholder='Ingrese nombre'
      />

      <button className='bg-blue-400 p-3 rounded-md  hover:bg-blue-600 ' onClick={handleClick}>
        Set Focus
      </button>
    </div>
  );
};
