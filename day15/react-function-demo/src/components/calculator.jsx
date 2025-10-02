import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return setResult('Invalid input');

    switch (operation) {
      case '+': setResult(a + b); break;
      case '-': setResult(a - b); break;
      case '*': setResult(a * b); break;
      case '/': setResult(b !== 0 ? a / b : 'Cannot divide by zero'); break;
      default: setResult('Unknown operation');
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="First number" />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Second number" />
      <div>
        <button onClick={() => handleCalculate('+')}>Add</button>
        <button onClick={() => handleCalculate('-')}>Subtract</button>
        <button onClick={() => handleCalculate('*')}>Multiply</button>
        <button onClick={() => handleCalculate('/')}>Divide</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}
