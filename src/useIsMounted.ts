import {useState, useEffect, useRef} from 'react';

export const useIsMounted = (update?: boolean) => {
  const ref = useRef(false);

  const [, setUpdate] = useState({});

  useEffect(() => {
    ref.current = true;

    if (update) {
      setUpdate({});
    }
  }, [update]);

  return ref.current;
};
