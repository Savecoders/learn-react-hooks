import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { LoadingMessage } from '../04-useFetch/LoadingMessage';
import { PokemonCard } from '../04-useFetch/PokemonCard';

const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading, hasError, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`,
  );
  return (
    <section className='grid gap-4 p-3'>
      <h1>Info Poke</h1>

      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        hasError || (
          <PokemonCard
            id={data?.id}
            name={data?.name}
            sprites={[data?.sprites.front_default, data?.sprites.back_default]}
          />
        )
      )}

      {hasError && (
        <p className='text-red-500 font-bold'>
          {error.status} - {error.message}
        </p>
      )}

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
        onClick={() => decrement()}
      >
        Anterior
      </button>

      <button
        className='bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded mr-4'
        onClick={() => increment()}
      >
        Siguiente
      </button>
    </section>
  );
};

export default Layout;
