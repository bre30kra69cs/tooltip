import React, {FC, RefObject, ReactNode} from 'react';

import {bem} from './utils';

import './TooltipContent.css';

export type TooltipStatus = 'closed' | 'wait' | 'out';

export type TooltipSide = 'left' | 'right' | 'top' | 'bottom';

type TooltipContentProps = {
  anchor: RefObject<HTMLDivElement>;
  side: TooltipSide;
  contentHeight: number;
  contentWidth: number;
  durationOut: number;
  status: TooltipStatus;
  children?: ReactNode;
  setHover: (hover: boolean) => void;
};

const b = bem('TooltipContent');

export const TooltipContent: FC<TooltipContentProps> = ({
  anchor,
  side,
  contentHeight,
  contentWidth,
  durationOut,
  status,
  children,
  setHover,
}) => {
  const data = anchor.current?.getBoundingClientRect() ?? {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
  };

  let left = 0;
  let top = 0;

  if (side === 'left') {
    left = data.left - contentWidth;
    top = data.top + data.height / 2 - contentHeight / 2;
  }

  if (side === 'top') {
    left = data.left + data.width / 2 - contentWidth / 2;
    top = data.top - contentHeight;
  }

  if (side === 'right') {
    left = data.right;
    top = data.top + data.height / 2 - contentHeight / 2;
  }

  if (side === 'bottom') {
    left = data.left + data.width / 2 - contentWidth / 2;
    top = data.bottom;
  }

  return (
    <div
      className={b('', {
        [`status-${status}`]: true,
      })}
      style={{
        left,
        top,
        width: contentWidth,
        height: contentHeight,
        animationDuration: `${durationOut}ms`,
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {children}
    </div>
  );
};
