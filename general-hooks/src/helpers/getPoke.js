export const getFetch = async (url, setState, setLoadingState, cache) => {
  if (cache[url]) {
    setState({
      data: cache[url],
      isLoading: false,
      hasError: false,
      error: null,
    });
    return;
  }

  setLoadingState();
  const response = await fetch(url);

  if (!response.ok) {
    setState({
      data: null,
      isLoading: false,
      hasError: true,
      error: {
        status: response.status,
        message: !response.statusText ? 'Ocurrió un error' : response.statusText,
      },
    });
    return;
  }

  const data = await response.json();
  setState({
    data,
    isLoading: false,
    hasError: false,
    error: null,
  });

  cache[url] = data;
};
