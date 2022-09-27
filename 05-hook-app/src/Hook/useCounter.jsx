import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementar = () => setCounter(counter + 1);

  const decrementar = () => {
    if (counter === initialValue) return;
    setCounter(counter - 1);
  };

  const resetear = () => setCounter(initialValue);

  return {
    counter,
    incrementar,
    decrementar,
    resetear,
  };
};
