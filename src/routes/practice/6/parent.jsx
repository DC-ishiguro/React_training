import React, { useState } from 'react';
import Child from './child';

const Parent = () => {
  const [childValue, setChildValue] = useState('');

  const handleValueChange = (value) => {
    setChildValue(value);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Received from Child: {childValue}</p>
      <Child onValueChange={handleValueChange} />
    </div>
  );
};

export default Parent;
