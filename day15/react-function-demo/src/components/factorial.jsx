import { useState } from 'react';

export default function Factorial() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateFactorial = (n) => {
    if (n < 0) return 'Invalid input';
    if (n === 0 || n === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= n; i++) fact *= i;
    return fact;
  };

  const handleClick = () => {
    const n = parseInt(number);
    setResult(isNaN(n) ? 'Invalid input' : calculateFactorial(n));
  };

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input type="number" value={number} onChange={e => setNumber(e.target.value)} placeholder="Enter a number" />
      <button onClick={handleClick}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}
