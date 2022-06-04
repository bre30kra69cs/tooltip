import React, {FC} from 'react';

import {Tooltip} from '../src/Tooltip';
import {TooltipSide} from '../src/TooltipContent';
import {bem} from '../src/utils';

import './Example.css';

type ExampleProps = {
  overflow?: boolean;
  side?: TooltipSide;
};

const b = bem('Example');

export const Example: FC<ExampleProps> = ({overflow, side}) => {
  return (
    <main className={b()}>
      <Tooltip
        className={b('tooltip', {
          left: true,
        })}
        durationIn={1000}
        durationOut={2000}
        side={side}
        contentHeight={25}
        contentWidth={50}
        content={
          <div>
            <span>Left tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            left: true,
            overflow,
          })}
        ></div>
      </Tooltip>
      {/* <Tooltip>
        <div
          className={b('box', {
            top: true,
            overflow,
          })}
        ></div>
      </Tooltip>
      <Tooltip>
        <div
          className={b('box', {
            right: true,
            overflow,
          })}
        ></div>
      </Tooltip>
      <Tooltip>
        <div
          className={b('box', {
            bottom: true,
            overflow,
          })}
        ></div>
      </Tooltip>
      <Tooltip>
        <div
          className={b('box', {
            center: true,
          })}
        ></div>
      </Tooltip> */}
    </main>
  );
};
