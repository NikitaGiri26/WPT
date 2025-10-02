import React, { useEffect, useState } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // Mount
  useEffect(() => {
    console.log('🔵 Component mounted');

    return () => {
      console.log('🔴 Component will unmount');
    };
  }, []);

  // Update
  useEffect(() => {
    if (count > 0) {
      console.log(`🟡 Count updated to ${count}`);
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LifecycleDemo;
