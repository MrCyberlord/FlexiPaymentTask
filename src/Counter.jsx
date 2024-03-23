import React from 'react'
import { useCounter } from './CounterContext';
import { Link } from 'react-router-dom';

const Counter = () => {
  const{ count, increment, decrement, getColor} = useCounter()
  
    return (
      <div className="App" style={{backgroundColor: getColor(),
       minHeight: '100vh', display: 'flex', flexDirection: 'column', 
       justifyContent: 'center', alignItems: 'center', gap: '20px'
       }}>
        <button onClick={increment}>+</button>
        <p style={{color: "white"}}>{count}</p>
        <button onClick={decrement}>-</button>
        <Link to="/display" style={{color: "gold"}}>Display Page </Link>
      </div>
    );
  
}

export default Counter
