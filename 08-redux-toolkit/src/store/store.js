import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/CounterSlices';
import { pokemonSlice } from './slices/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});
