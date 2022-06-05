import React, {useEffect, useRef, FC, ReactNode} from 'react';
import {createPortal} from 'react-dom';

type PortalProps = {
  containerId: string;
  show?: boolean;
  as?: keyof HTMLElementTagNameMap;
  children?: ReactNode;
};

export const Portal: FC<PortalProps> = ({containerId, show, as = 'div', children}) => {
  const ref = useRef(document.createElement(as));

  useEffect(() => {
    if (!show) {
      return;
    }

    ref.current.setAttribute('id', containerId);
    document.body.appendChild(ref.current);

    return () => {
      document.body.removeChild(ref.current);
    };
  }, [containerId, show]);

  return createPortal(children, ref.current);
};
