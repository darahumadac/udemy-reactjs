// Import react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//   return 'Click on me!!!';
// }

// Create a react component
const App = () => {
  const buttonText = { text: 'Click me!' };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Show react component on the screen
ReactDOM.render(<App />, document.getElementById('root'));
