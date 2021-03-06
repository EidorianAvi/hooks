import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  useEffect(() => {
    let interval = setInterval(increment, 1000)

    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
