import React from 'react';
import { useCounter } from '../Hook/useCounter';
import { useFetch } from '../Hook/useFetch';
import { LoadingQuote } from '../03-Example/LoadingQuote';
import { Quote } from '../03-Example/Quote';

export const Layout = () => {
  const { counter, incrementar, decrementar } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data, isLoading, hasError } = useFetch(url);
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button onClick={decrementar} className='btn btn-primary'>
        &lt;- Before
      </button>
      <button onClick={incrementar} className='btn btn-primary'>
        Next -&gt;
      </button>
    </>
  );
};
