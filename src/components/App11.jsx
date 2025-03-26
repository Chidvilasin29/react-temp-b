import React, { useState } from 'react';

export default function App11() {
  const [color, setColor] = useState('black'); 
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSubmit = () => {
    setColor(inputValue); 
  };

  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="Enter the colour"
          value={inputValue}
          onChange={handleInputChange}
        />
        {" "}
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <p>
        <h4 style={{ color: color }}>Hello World</h4>
      </p>
    </div>
  );
}