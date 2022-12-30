import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemon);
  const before = page - 2;
  console.log('before: ', before);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      {isLoading ? (
        <h2> CARGANDO... </h2>
      ) : (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}
      <button
        disabled={before < 0}
        onClick={() => {
          dispatch(getPokemons(before));
        }}
      >
        Before
      </button>
      &nbsp;
      <button
        onClick={() => {
          dispatch(getPokemons(page));
        }}
      >
        Next
      </button>
    </>
  );
};
