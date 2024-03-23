import React, { useState } from 'react'

import { createContext, useContext } from 'react'

const CounterContext = createContext()

export const useCounter = () => useContext(CounterContext)

const CounterProvider = ({children}) => {
    const[count, setCount] = useState(0)
    const increment = () => setCount(pcount => pcount + 1)
    const decrement = () => setCount(pcount => pcount - 1)
    const getColor = () => (count % 2 == 0 ? 'blue' : 'green')

  return (
    <CounterContext.Provider value={{ count, increment, decrement, getColor}} >
        {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider



