import React, { useState } from 'react';

const Form = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(inputValue);
    setInputValue('');
    document.getElementById('submitButton').classList.add('submitted'); 
    setTimeout(() => {
      document.getElementById('submitButton').classList.remove('submitted'); 
    }, 1000);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your input"
      />
      <button id="submitButton" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
