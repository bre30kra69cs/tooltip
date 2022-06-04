import React, {useState, useEffect, useRef, FC, ReactNode} from 'react';

import {Portal} from './Portal';
import {bem} from './utils';

import './Tooltip.css';

type TooltipSide = 'left' | 'right' | 'top' | 'bottom';

type TooltipProps = {
  side?: TooltipSide;
  sidesOrder?: TooltipSide[];
  durationIn?: number;
  durationOut?: number;
  content: ReactNode;
  children: ReactNode;
};

const SIDES_ORDERS: TooltipSide[] = ['left', 'top', 'right', 'bottom'];

const b = bem('Tooltip');

export const Tooltip: FC<TooltipProps> = ({
  side = 'left',
  sidesOrder = SIDES_ORDERS,
  durationIn = 0,
  durationOut = 0,
  content,
  children,
}) => {
  const timerRef = useRef<NodeJS.Timer>();

  const [hover, setHover] = useState(false);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (hover) {
      timerRef.current = setTimeout(() => {
        setShow(true);
      }, durationIn);
    } else {
      timerRef.current = setTimeout(() => {
        setShow(false);
      }, durationOut);
    }
  }, [hover, durationIn, durationOut]);

  return (
    <>
      <div
        className={b()}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {children}
      </div>
      {show && <Portal containerId="tooltip-portal">{content}</Portal>}
    </>
  );
};
