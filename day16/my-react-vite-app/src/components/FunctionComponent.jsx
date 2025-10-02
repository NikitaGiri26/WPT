import React, { useState, useEffect } from 'react';

function FunctionComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect: Component mounted or updated');

    return () => {
      console.log('useEffect Cleanup: Component will unmount');
    };
  }, [count]);

  return (
    <div style={{ border: '1px solid green', padding: '10px', marginTop: '10px' }}>
      <h3>Function Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

export default FunctionComponent;
