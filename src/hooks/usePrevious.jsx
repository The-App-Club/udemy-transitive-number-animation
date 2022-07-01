import {useRef, useEffect} from 'react';

const usePrevious = (value) => {
  const lastValue = useRef(null);

  useEffect(() => {
    lastValue.current = value;
  }, [value]);

  return lastValue.current;
};

export {usePrevious};
