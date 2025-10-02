import { useState } from 'react';

function OperationCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;
    switch (operation) {
      case 'add':
        res = a + b;
        break;
      case 'subtract':
        res = a - b;
        break;
      case 'multiply':
        res = a * b;
        break;
      case 'divide':
        res = b !== 0 ? (a / b).toFixed(2) : 'Undefined';
        break;
      default:
        res = 'Invalid Operation';
    }
    setResult(res);
  };

  return (
    <div>
      <h2>Operation Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="First number" />
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Second number" />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Addition</option>
          <option value="subtract">Subtraction</option>
          <option value="multiply">Multiplication</option>
          <option value="divide">Division</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default OperationCalculator;
