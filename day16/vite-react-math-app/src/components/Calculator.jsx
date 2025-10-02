import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    setResults({
      addition: a + b,
      subtraction: a - b,
      multiplication: a * b,
      division: b !== 0 ? (a / b).toFixed(2) : 'Undefined',
    });
  };

  return (
    <div>
      <h2>Basic Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="First number" />
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Second number" />
        <button type="submit">Calculate</button>
      </form>
      {results && (
        <ul>
          <li>Addition: {results.addition}</li>
          <li>Subtraction: {results.subtraction}</li>
          <li>Multiplication: {results.multiplication}</li>
          <li>Division: {results.division}</li>
        </ul>
      )}
    </div>
  );
}

export default Calculator;
