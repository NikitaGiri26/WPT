import { useState } from 'react';

function Factorial() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateFactorial = (n) => {
    if (n < 0) return 'Invalid';
    return n === 0 ? 1 : n * calculateFactorial(n - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number);
    setResult(calculateFactorial(num));
  };

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
        />
        <button type="submit">Calculate</button>
      </form>
      {result !== null && <p>Factorial of {number} is: {result}</p>}
    </div>
  );
}

export default Factorial;
