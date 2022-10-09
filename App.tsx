import * as React from 'react';
import './style.css';
import {useState} from 'react'
export default function App() {
  const [count, setCount] = useState(0)

 function handleIncrement() {
    setCount((prev)=> prev + 1 )
  }

function handleDecrement() {
  setCount(prev => prev - 1)
}
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
