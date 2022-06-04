import React, {FC, ReactNode} from 'react';

type TooltipSide = 'left' | 'right' | 'top' | 'bottom';

type TooltipProps = {
  side?: TooltipSide;
  sidesOrder?: TooltipSide[];
  children: ReactNode;
};

const SIDES_ORDERS: TooltipSide[] = ['left', 'top', 'right', 'bottom'];

export const Tooltip: FC<TooltipProps> = ({side = 'left', sidesOrder = SIDES_ORDERS, children}) => {
  return <>{children}</>;
};
