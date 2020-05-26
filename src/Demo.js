import React from 'react';
import './Demo.css';
import MyComponent from './lib/components/MyComponent';

function Demo() {
  return (
    <div className="Demo">
      <MyComponent myProp="Welcome to MyComponent" />
    </div>
  );
}

export default Demo;
