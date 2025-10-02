import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  // Track counter changes and update history
  useEffect(() => {
    setHistory(prev => [...prev, count]);
  }, [count]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>

      <h3>Counter History</h3>
      <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '5px' }}>#</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {history.map((val, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '5px' }}>{index + 1}</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>{val}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Counter;
