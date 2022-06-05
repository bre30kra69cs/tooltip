import React, {FC, RefObject, ReactNode} from 'react';

import {bem} from './utils';

import './TooltipContent.css';

export type TooltipStatus = 'closed' | 'wait' | 'out';

export type TooltipSide = 'left' | 'right' | 'top' | 'bottom';

type TooltipContentProps = {
  anchor: RefObject<HTMLDivElement>;
  side: TooltipSide;
  sidesOrder: TooltipSide[];
  contentHeight: number;
  contentWidth: number;
  animationIn: number;
  animationOut: number;
  status: TooltipStatus;
  children?: ReactNode;
  setHover: (hover: boolean) => void;
};

const b = bem('TooltipContent');

const checkIsElementInViewportFull = (left: number, top: number, width: number, height: number) => {
  return left >= 0 && top >= 0 && top + height <= window.innerHeight && left + width <= innerWidth;
};

export const TooltipContent: FC<TooltipContentProps> = ({
  anchor,
  side,
  sidesOrder,
  contentHeight,
  contentWidth,
  animationIn,
  animationOut,
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

  const coords = {
    left: {
      left: data.left - contentWidth,
      top: data.top + data.height / 2 - contentHeight / 2,
    },
    top: {
      left: data.left + data.width / 2 - contentWidth / 2,
      top: data.top - contentHeight,
    },
    right: {
      left: data.right,
      top: data.top + data.height / 2 - contentHeight / 2,
    },
    bottom: {
      left: data.left + data.width / 2 - contentWidth / 2,
      top: data.bottom,
    },
  };

  const target = [side, ...sidesOrder].find((x) => {
    if (coords[x].left < 0) {
      return false;
    }

    if (coords[x].top < 0) {
      return false;
    }

    if (coords[x].top + contentHeight > window.innerHeight) {
      return false;
    }

    if (coords[x].left + contentWidth > window.innerWidth) {
      return false;
    }

    return true;
  });

  if (!target) {
    return null;
  }

  return (
    <div
      className={b('', {
        [`status-${status}`]: true,
      })}
      style={{
        left: coords[target].left,
        top: coords[target].top,
        width: contentWidth,
        height: contentHeight,
        animationDuration: status === 'wait' ? `${animationIn}ms` : `${animationOut}ms`,
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
