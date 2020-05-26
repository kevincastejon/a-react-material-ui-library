import React from 'react';

import { withKnobs, text } from '@storybook/addon-knobs';
import MyComponent from '../lib/components/MyComponent';

export default {
  title: 'MyComponent',
  component: MyComponent,
  decorators: [withKnobs],
};

export const Playground = () => {
  const val = text('MyProp', 'Hello');
  return (
    <div>
      <MyComponent
        myProp={val}
      />
    </div>
  );
};
