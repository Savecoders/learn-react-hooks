import PropTypes from 'prop-types';
import { useRef } from 'react';

export const PokemonCard = ({ id, name = '', sprites = [] }) => {
  const cardRef = useRef();

  // useLayoutEffect(() => {
  //   console.log(cardRef.current.getBoundingClientRect());
  //   return () => {
  //     console.log('PokemonCard unmounted');
  //   };
  // }, []);

  return (
    <blockquote className='min-w-10 h-[200px] rounded-md border-cyan-50 border p-2' ref={cardRef}>
      <article className='flex justify-around'>
        {sprites.map((sprite, index) => (
          <img key={index} src={sprite} />
        ))}
      </article>
      <p className='text-xs text-cyan-400'>Id Pokemon: #{id}</p>
      <h2 className='text-xl text-zinc-700 font-semibold'>Name: {name?.toUpperCase()}</h2>
    </blockquote>
  );
};
PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  sprites: PropTypes.arrayOf(PropTypes.string),
};
