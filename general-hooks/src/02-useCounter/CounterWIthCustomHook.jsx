import { useCounter } from '../hooks/useCounter';

export default function CounterWithCustomHook() {
  const { counter, increment, decrement, reset } = useCounter(10);

  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8 space-y-5'>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
        onClick={() => increment(2)}
      >
        +1
      </button>

      <button
        className='bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded mr-4'
        onClick={reset}
      >
        Reset
      </button>

      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4'
        onClick={() => decrement(2)}
      >
        -1
      </button>
    </div>
  );
}
