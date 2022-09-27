import { useState } from 'react';
import { useEffect } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    setState({
      isLoading: false,
      data: data,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return state;
};
