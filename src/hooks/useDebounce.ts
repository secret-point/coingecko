import {useEffect, useState} from 'react';

export const useDebounce = (values: Array<any>, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState([...values]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue([...values]);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...values, delay]);

  return debouncedValue;
};
