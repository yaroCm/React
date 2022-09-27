import React from 'react';
import { useState } from 'react';
import { useCounter } from '../Hook/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, incrementar } = useCounter();
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <button className='btn btn-warning' onClick={incrementar}>
        +1
      </button>
      <button
        className='btn btn-danger'
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
