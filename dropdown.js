import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const addName = () => {
    if (name.trim() !== '') {
      setNamesList((prevNamesList) => [...prevNamesList, name]);
      setName(''); // Clear the input field after adding the name
    }
  };

  return (
    <div>
      <h1>Dynamic Dropdown Example</h1>
      <input type="text" value={name} onChange={handleInputChange} placeholder="Enter a name" />
      <button onClick={addName}>Add to Dropdown</button>

      <h2>Names List:</h2>
      <select>
        {namesList.map((name, index) => (
          <option key={index}>{name}</option>
        ))}
      </select>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
