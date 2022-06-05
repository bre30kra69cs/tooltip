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

const ah = 5;

const aw = 5;

export const TooltipContent: FC<TooltipContentProps> = ({
  anchor,
  side,
  sidesOrder,
  contentHeight: ch,
  contentWidth: cw,
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
      left: data.left - (cw + aw),
      top: data.top + data.height / 2 - ch / 2,
      width: cw + aw,
      height: ch,
    },
    top: {
      left: data.left + data.width / 2 - cw / 2,
      top: data.top - (ch + ah),
      width: cw,
      height: ch + ah,
    },
    right: {
      left: data.right,
      top: data.top + data.height / 2 - ch / 2,
      width: cw + aw,
      height: ch,
    },
    bottom: {
      left: data.left + data.width / 2 - cw / 2,
      top: data.bottom,
      width: cw,
      height: ch + ah,
    },
  };

  const target = [side, ...sidesOrder].find((x) => {
    if (coords[x].left < 0) {
      return false;
    }

    if (coords[x].top < 0) {
      return false;
    }

    if (coords[x].top + coords[x].height > window.innerHeight) {
      return false;
    }

    if (coords[x].left + coords[x].width > window.innerWidth) {
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
        [`side-${target}`]: true,
      })}
      style={{
        left: coords[target].left,
        top: coords[target].top,
        width: coords[target].width,
        height: coords[target].height,
        animationDuration: status === 'wait' ? `${animationIn}ms` : `${animationOut}ms`,
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className={b('content')}
        style={{
          width: cw,
          height: ch,
        }}
      >
        {children}
      </div>
      <div
        className={b('arrow', {
          [`side-${target}`]: true,
        })}
      />
    </div>
  );
};
