import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Example} from './Example';

export default {
  title: 'Example',
  component: Example,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => {
  return <Example {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  overflow: true,
  side: 'right',
  hideOnScroll: false,
};
