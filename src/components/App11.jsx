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
      {/*
      <p>
        This React component lets users change the color of "Hello World" by typing a color
        into an input field and clicking Submit. It uses two state variables: one for the
        current color and one for the input value. When the button is clicked, the text color
        updates based on the input.
      </p>
      */}
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