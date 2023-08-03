import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*import React, { useState } from 'react';
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

  const updateDropdown = () => {
    return namesList.map((name, index) => React.createElement('option', { key: index }, name));
  };

  const dropdownOptions = updateDropdown();

  const appContainer = React.createElement('div', null,
    React.createElement('h1', null, 'Shashikiran REACT Dynamic Dropdown PROJECT'),
    React.createElement('input', { type: 'text', value: name, onChange: handleInputChange, placeholder: 'Enter a name' }),
    React.createElement('button', { onClick: addName }, 'Add to Dropdown'),
    React.createElement('h2', null, 'Names List:'),
    React.createElement('select', null, dropdownOptions)
  );

  return appContainer;
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
*/

