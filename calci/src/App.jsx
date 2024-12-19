import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstInput, setFirstInput] = useState('');
  const [operator, setOperator] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
    } else if (value === '=') {
      if (firstInput && operator && secondInput) {
        calculateResult();
      }
    } else if (value === 'C') {
      clearAll();
    } else {
      if (!operator) {
        setFirstInput(firstInput + value);
      } else {
        setSecondInput(secondInput + value);
      }
    }
  };

  const calculateResult = () => {
    let calcResult;
    const num1 = parseFloat(firstInput);
    const num2 = parseFloat(secondInput);

    switch (operator) {
      case '+':
        calcResult = num1 + num2;
        break;
      case '-':
        calcResult = num1 - num2;
        break;
      case '*':
        calcResult = num1 * num2;
        break;
      case '/':
        calcResult = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      default:
        calcResult = 'Invalid Operation';
    }
    setResult(calcResult);
  };

  const clearAll = () => {
    setFirstInput('');
    setOperator('');
    setSecondInput('');
    setResult('');
  };

  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          value={firstInput}
          placeholder="First Number"
          readOnly
        />
        <input
          className="operator"
          type="text"
          value={operator}
          placeholder="Operator"
          readOnly
        />
        <input
          type="text"
          value={secondInput}
          placeholder="Second Number"
          readOnly
        />
      </div>
      <div className="result-container">
        <h2>Result: {result}</h2>
      </div>
      <div className="digits">
        <div className="first">
          <button className="button" onClick={() => handleButtonClick('1')}>1</button>
          <button className="button" onClick={() => handleButtonClick('2')}>2</button>
          <button className="button" onClick={() => handleButtonClick('3')}>3</button>
        </div>
        <div className="second">
          <button className="button" onClick={() => handleButtonClick('4')}>4</button>
          <button className="button" onClick={() => handleButtonClick('5')}>5</button>
          <button className="button" onClick={() => handleButtonClick('6')}>6</button>
        </div>
        <div className="third">
          <button className="button" onClick={() => handleButtonClick('7')}>7</button>
          <button className="button" onClick={() => handleButtonClick('8')}>8</button>
          <button className="button" onClick={() => handleButtonClick('9')}>9</button>
        </div>
        <div className="fourth">
          <button className="button" onClick={() => handleButtonClick('+')}>+</button>
          <button className="button" onClick={() => handleButtonClick('0')}>0</button>
          <button className="button" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="fifth">
          <button className="button" onClick={() => handleButtonClick('*')}>*</button>
          <button className="button" onClick={() => handleButtonClick('/')}>/</button>
          <button className="button" onClick={() => handleButtonClick('=')}>=</button>
          <button className="button" onClick={() => handleButtonClick('C')}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
