import {useEffect} from 'react';

export const useScroll = (fn: () => void) => {
  useEffect(() => {
    const listner = () => {
      fn();
    };

    window.addEventListener('scroll', listner, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', listner);
    };
  }, [fn]);
};
