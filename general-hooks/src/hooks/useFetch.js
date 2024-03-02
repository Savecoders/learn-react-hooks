import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/getPoke';

const localCache = {};
// react have a library called react-tanStack Query
// that is a better way to do this
export const useFetch = url => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch(url, setState, setLoadingState, localCache);
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  };
};
