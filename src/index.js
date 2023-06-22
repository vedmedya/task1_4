import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={styles.container}>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Button has been clicked: {count}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
  },
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
