import React from 'react';
import { useState } from 'react';
import { useCounter } from '../Hook/useCounter';

export const MemoHook = () => {
  const { counter, incrementar } = useCounter();
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <small>{counter} </small>
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
