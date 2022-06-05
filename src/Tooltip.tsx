import React, {useState, useRef, FC, ReactNode} from 'react';

import {Portal} from './Portal';
import {bem, cn} from './utils';
import {useMounted} from './useMounted';
import {TooltipContent, TooltipStatus, TooltipSide} from './TooltipContent';
import {useScroll} from './useScroll';

import './Tooltip.css';

type TooltipProps = {
  content: ReactNode;
  contentHeight: number;
  contentWidth: number;
  side?: TooltipSide;
  sidesOrder?: TooltipSide[];
  durationIn?: number;
  durationWait?: number;
  durationOut?: number;
  className?: string;
  children?: ReactNode;
};

const SIDES_ORDERS: TooltipSide[] = ['left', 'top', 'right', 'bottom'];

const b = bem('Tooltip');

export const Tooltip: FC<TooltipProps> = ({
  side = 'left',
  sidesOrder = SIDES_ORDERS,
  durationIn = 0,
  durationWait = 0,
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

  const [status, setStatus] = useState<TooltipStatus>('closed');

  const isShow = status !== 'closed';

  useMounted(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (hover) {
      if (status === 'closed') {
        timerRef.current = setTimeout(() => {
          setStatus('wait');
        }, durationIn);
      }

      if (status === 'wait') {
        return;
      }

      if (status === 'out') {
        setStatus('wait');
      }
    } else {
      if (status === 'closed') {
        return;
      }

      if (status === 'wait') {
        timerRef.current = setTimeout(() => {
          setStatus('out');
        }, durationWait);
      }

      if (status === 'out') {
        return;
      }
    }
  }, [hover, durationIn, durationWait]);

  useMounted(() => {
    if (status === 'closed') {
      return;
    }

    if (status === 'wait') {
      return;
    }

    if (status === 'out') {
      timerRef.current = setTimeout(() => {
        setStatus('closed');
      }, durationOut);
    }
  }, [status, durationOut]);

  useScroll(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (isShow) {
      setStatus('closed');
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
      <Portal containerId="tooltip-portal" show={isShow}>
        <TooltipContent
          anchor={ref}
          side={side}
          contentHeight={contentHeight}
          contentWidth={contentWidth}
          durationOut={durationOut}
          status={status}
          setHover={setHover}
        >
          {content}
        </TooltipContent>
      </Portal>
    </>
  );
};
