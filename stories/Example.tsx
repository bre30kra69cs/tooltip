import React, {FC} from 'react';

import {Tooltip} from '../src';
import {bem} from '../src/utils';

import './Example.css';

type ExampleProps = {
  overflow?: boolean;
};

const b = bem('Example');

export const Example: FC<ExampleProps> = ({overflow}) => {
  return (
    <main className={b()}>
      <Tooltip
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
