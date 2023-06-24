import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Output from './Output';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (input) => {
    setUserInput(input);
    setResult(`You entered: ${input}`);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <Header />
          <Form handleSubmit={handleSubmit} />
          <Output userInput={userInput} result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
