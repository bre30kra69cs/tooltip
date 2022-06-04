import React, {useEffect, useRef, FC, ReactNode} from 'react';
import {createPortal} from 'react-dom';

type PortalProps = {
  containerId: string;
  as?: keyof HTMLElementTagNameMap;
  children: ReactNode;
};

export const Portal: FC<PortalProps> = ({containerId, as = 'div', children}) => {
  const ref = useRef(document.createElement(as));

  useEffect(() => {
    ref.current.setAttribute('id', containerId);
    document.body.appendChild(ref.current);

    return () => {
      document.body.removeChild(ref.current);
    };
  }, [containerId]);

  return createPortal(children, ref.current);
};
