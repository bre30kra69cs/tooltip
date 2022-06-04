import React, {useState, useRef, FC, ReactNode} from 'react';

import {Portal} from './Portal';
import {bem, cn} from './utils';
import {useMounted} from './useMounted';
import {TooltipContent, TooltipSide} from './TooltipContent';
import {useScroll} from './useScroll';

import './Tooltip.css';

type TooltipProps = {
  side?: TooltipSide;
  sidesOrder?: TooltipSide[];
  durationIn?: number;
  durationOut?: number;
  className?: string;
  content: ReactNode;
  contentHeight: number;
  contentWidth: number;
  children: ReactNode;
};

const SIDES_ORDERS: TooltipSide[] = ['left', 'top', 'right', 'bottom'];

const b = bem('Tooltip');

export const Tooltip: FC<TooltipProps> = ({
  side = 'left',
  sidesOrder = SIDES_ORDERS,
  durationIn = 0,
  durationOut = 0,
  className,
  content,
  contentHeight,
  contentWidth,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const timerRef = useRef<NodeJS.Timer>();

  const [hover, setHover] = useState(false);

  const [show, setShow] = useState(false);

  useMounted(() => {
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

  useScroll(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (show) {
      setShow(false);
    }
  });

  return (
    <>
      <div
        ref={ref}
        className={cn(b(), className)}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {children}
      </div>
      {show && (
        <Portal containerId="tooltip-portal">
          <TooltipContent
            anchor={ref}
            side={side}
            contentHeight={contentHeight}
            contentWidth={contentWidth}
          >
            {content}
          </TooltipContent>
        </Portal>
      )}
    </>
  );
};
