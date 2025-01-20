```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
    const id = setTimeout(() => {
      console.log('Timeout!');
    }, 10000); // 10 second timeout
    setTimeoutId(id);
    return () => {
      // Cleanup function
      console.log('Unmounting...');
      clearTimeout(id);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```