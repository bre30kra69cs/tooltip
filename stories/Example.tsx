import React, {FC} from 'react';

import {bem, Tooltip, TooltipSide} from '../src';

import './Example.css';

type ExampleProps = {
  overflow?: boolean;
  side?: TooltipSide;
  hideOnScroll?: boolean;
};

const b = bem('Example');

const contentHeight = 50;

const contentWidth = 150;

export const Example: FC<ExampleProps> = ({overflow, side, hideOnScroll}) => {
  return (
    <main className={b()}>
      <Tooltip
        className={b('tooltip', {
          left: true,
        })}
        side={side}
        hideOnScroll={hideOnScroll}
        durationIn={1000}
        durationWait={1000}
        durationOut={300}
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        content={
          <div className={b('content')}>
            <span>Left tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            left: true,
            overflow,
          })}
        >
          <span className={b('text')}>Hover 1s</span>
        </div>
      </Tooltip>
      <Tooltip
        className={b('tooltip', {
          top: true,
        })}
        side={side}
        hideOnScroll={hideOnScroll}
        durationIn={1100}
        durationWait={1100}
        durationOut={300}
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        content={
          <div className={b('content')}>
            <span>Top tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            top: true,
            overflow,
          })}
        >
          <span className={b('text')}>Hover 1.1s</span>
        </div>
      </Tooltip>
      <Tooltip
        className={b('tooltip', {
          right: true,
        })}
        side={side}
        hideOnScroll={hideOnScroll}
        durationIn={1300}
        durationWait={1300}
        durationOut={300}
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        content={
          <div className={b('content')}>
            <span>Right tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            right: true,
            overflow,
          })}
        >
          <span className={b('text')}>Hover 1.3s</span>
        </div>
      </Tooltip>
      <Tooltip
        className={b('tooltip', {
          bottom: true,
        })}
        side={side}
        hideOnScroll={hideOnScroll}
        durationIn={1400}
        durationWait={1400}
        durationOut={300}
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        content={
          <div className={b('content')}>
            <span>Bottom tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            bottom: true,
            overflow,
          })}
        >
          <span className={b('text')}>Hover 1.4s</span>
        </div>
      </Tooltip>
      <Tooltip
        className={b('tooltip', {
          center: true,
        })}
        side={side}
        hideOnScroll={hideOnScroll}
        durationIn={1500}
        durationWait={1500}
        durationOut={300}
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        content={
          <div className={b('content')}>
            <span>Center tooltip</span>
          </div>
        }
      >
        <div
          className={b('box', {
            center: true,
            overflow,
          })}
        >
          <span className={b('text')}>Hover 1.5s</span>
        </div>
      </Tooltip>
    </main>
  );
};
