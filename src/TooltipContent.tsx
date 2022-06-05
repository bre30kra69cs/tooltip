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

/**
 *
 * Shorts
 * - ac - absolute coords
 * - vc - viewport coords
 * - ch - content height
 * - cw - content width
 * - ad - anchor data
 * - bd - body data
 * - ah - arrow height
 * - aw - arrow width
 */
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
  const ad = anchor.current?.getBoundingClientRect() ?? {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
  };

  const bd = document.body.getBoundingClientRect();

  const data = {
    left: -bd.left + ad.left,
    top: -bd.top + ad.top,
    right: -bd.left + ad.left + ad.width,
    bottom: -bd.top + ad.top + ad.height,
    width: ad.width,
    height: ad.height,
  };

  const ac = {
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

  const vc = {
    left: {
      left: ad.left - (cw + aw),
      top: ad.top + ad.height / 2 - ch / 2,
      width: cw + aw,
      height: ch,
    },
    top: {
      left: ad.left + ad.width / 2 - cw / 2,
      top: ad.top - (ch + ah),
      width: cw,
      height: ch + ah,
    },
    right: {
      left: ad.right,
      top: ad.top + ad.height / 2 - ch / 2,
      width: cw + aw,
      height: ch,
    },
    bottom: {
      left: ad.left + ad.width / 2 - cw / 2,
      top: ad.bottom,
      width: cw,
      height: ch + ah,
    },
  };

  const target = [side, ...sidesOrder].find((x) => {
    if (vc[x].left < 0) {
      return false;
    }

    if (vc[x].top < 0) {
      return false;
    }

    if (vc[x].top + vc[x].height > window.innerHeight) {
      return false;
    }

    if (vc[x].left + vc[x].width > window.innerWidth) {
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
        left: ac[target].left,
        top: ac[target].top,
        width: ac[target].width,
        height: ac[target].height,
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
