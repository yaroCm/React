import React from 'react';
import { useCounter } from '../Hook/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, incrementar, decrementar, resetear } = useCounter();
  return (
    <>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />
      <button className='btn btn-primary' onClick={incrementar}>
        +1
      </button>
      <button className='btn btn-primary' onClick={resetear}>
        Reset
      </button>
      <button className='btn btn-primary' onClick={decrementar}>
        -1
      </button>
    </>
  );
};
