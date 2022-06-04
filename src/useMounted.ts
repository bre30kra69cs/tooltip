import {useEffect, useRef, EffectCallback, DependencyList} from 'react';

export const useMounted = (effect: EffectCallback, deps?: DependencyList) => {
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    return effect();
  }, deps);

  useEffect(() => {
    ref.current = true;
  }, []);
};
