import React from 'react'
import { useCounter } from './CounterContext'
import { Link } from 'react-router-dom'

const Display = () => {
  const { count, getColor } = useCounter()
  return (
    <div style={{ backgroundColor: getColor(), color: "white", minHeight: '100vh', display: 'flex', flexDirection: 'column', 
    justifyContent: 'center', alignItems: 'center',}}>
      <p>The count is {count} and the color is {getColor()}</p>
      <Link to='/' style={{color: "gold"}}>CounterPage</Link>
    </div>
  )
}

export default Display

