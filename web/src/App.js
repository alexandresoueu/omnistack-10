import React, { useState } from 'react'

/** 
 * 
 * Component = isolate code that won't affect other part of application
 * State = pass property to component 
 * Property =
*/

function App() {
  let [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter++)
  }

  return (
    <>
      <h1>Counter: { counter }</h1>
      <button onClick={ incrementCounter }>Increment</button>
    </>
  )
}

export default App;
