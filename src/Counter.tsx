// Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Count: {count}</h1>
      <button style={{ margin: '10px' }} onClick={handleAdd}>
        Add (+)
      </button>
      <button onClick={handleSubtract}>
        Subtract (-)
      </button>
    </div>
  );
}

export default Counter;