import { useEffect, useState, useCallback } from 'react';

type FetchFunction<T> = () => Promise<T>;

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseFetchReturn<T> extends UseFetchState<T> {
  refetch: () => Promise<void>;
  reset: () => void;
}

export const useFetch = <T = any>(
  fetchFunction?: FetchFunction<T>,
  autoFetch: boolean = true
): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (): Promise<void> => {
    if (!fetchFunction) {
      setError('No fetch function provided');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      //   console.log('Starting fetch...'); // Debug log
      const result = await fetchFunction();
      //   console.log('Fetch result:', result); // Debug log

      if (result === null || result === undefined) {
        console.warn('Fetch function returned null/undefined');
      }

      setData(result);
    } catch (err) {
      console.error(err instanceof Error ? err : new Error('An Error occured')); // Debug log
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError('An error has occurred: ' + errorMessage);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  const reset = useCallback((): void => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  useEffect(() => {
    if (autoFetch) {
      console.log('🚀 Calling fetchData...');
      fetchData();
    }
  }, []);

  return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;
