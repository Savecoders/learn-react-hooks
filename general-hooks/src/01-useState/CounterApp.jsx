import { useState } from 'react';

export default function CounterApp() {
  const [state, setCounter] = useState({
    counter: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter, counter2, counter3 } = state;

  return (
    <main className='bg-white py-24 sm:py-32'>
      <section className='mx-auto max-w-7xl px-6 lg:px-8 space-y-5'>
        <nav className='flex justify-around'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Counter: {counter}
          </h1>

          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Counter: {counter2}
          </h1>

          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Counter: {counter3}
          </h1>
        </nav>
        <hr />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => {
            setCounter({
              ...state,
              counter: counter + 1,
            });
          }}
        >
          Increment Counters +1
        </button>
      </section>
    </main>
  );
}
