import { pokemonAPI } from '../../../api/pokemonApi';
import { setPokemons, starLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(starLoadingPokemons());

    /* const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );

    const data = await resp.json();
 */

    const { data } = await pokemonAPI.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    const payload = {
      pokemons: data.results,
      page: page + 1,
    };

    dispatch(setPokemons(payload));
  };
};
