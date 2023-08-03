import React, { useState } from 'react';
//import './App.css';

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

  const updateDropdown = () => {
    return namesList.map((name, index) => React.createElement('option', { key: index }, name));
  };

  const dropdownOptions = updateDropdown();

  const appContainer = React.createElement('div', null,
    React.createElement('h1', null, 'Shashikiran Dropdown REACT project'),
    React.createElement('input', { type: 'text', value: name, onChange: handleInputChange, placeholder: 'Enter a name' }),
    React.createElement('button', { onClick: addName }, 'Add to Dropdown'),
    React.createElement('h2', null, 'Names List:'),
    React.createElement('select', null, dropdownOptions)
    
  );

  return appContainer;

}

export default App;


/*
import React, { useState } from 'react';
// Import the CSS file for styling

function App() {
  // ... (existing code remains the same)



  return (
    <div className="center-container">
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

export default App;
*/
