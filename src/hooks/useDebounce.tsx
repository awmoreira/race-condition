import { useEffect, useRef } from 'react';

const useDebounce = (callback: (...args: never[]) => void, delay: number) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const debouncedFunction = (...args: never[]) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
};

export default useDebounce;
