import React, {FC} from 'react';

import {bem, Tooltip, TooltipSide} from '../src';

import './Example.css';

type ExampleProps = {
  overflow?: boolean;
  side?: TooltipSide;
};

const b = bem('Example');

const contentHeight = 50;

const contentWidth = 200;

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
        contentHeight={contentHeight}
        contentWidth={contentWidth}
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
      <Tooltip
        className={b('tooltip', {
          top: true,
        })}
        side={side}
        durationIn={1000}
        durationWait={1000}
        durationOut={300}
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        content={
          <div>
            <span>Top tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            top: true,
            overflow,
          })}
        ></div>
      </Tooltip>
      <Tooltip
        className={b('tooltip', {
          right: true,
        })}
        side={side}
        durationIn={1000}
        durationWait={1000}
        durationOut={300}
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        content={
          <div>
            <span>Right tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            right: true,
            overflow,
          })}
        ></div>
      </Tooltip>
      <Tooltip
        className={b('tooltip', {
          bottom: true,
        })}
        side={side}
        durationIn={1000}
        durationWait={1000}
        durationOut={300}
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        content={
          <div>
            <span>Bottom tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            bottom: true,
            overflow,
          })}
        ></div>
      </Tooltip>
      <Tooltip
        className={b('tooltip', {
          center: true,
        })}
        side={side}
        durationIn={1000}
        durationWait={1000}
        durationOut={300}
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        content={
          <div>
            <span>Center tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            center: true,
            overflow,
          })}
        ></div>
      </Tooltip>
    </main>
  );
};
