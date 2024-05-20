import React from 'react';
const Child = ({ onValueChange }) => {
  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Child;
