import React, {FC} from 'react';

import {bem, Tooltip, TooltipSide} from '../src';

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
        side={side}
        durationIn={1000}
        durationWait={1000}
        durationOut={300}
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
