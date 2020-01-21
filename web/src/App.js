import React, { useState } from 'react'

/** 
 * Component = Block isolate of HTML, CSS and JS, which don`t interfer of restant of aplication
 * State = informations which a component Dad pass to component Son
 * Property = Informations maintain for component(Imutability)
*/

function App() {
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter+ 1)
  }

  return (
    <>
      <h1>Counter: { counter }</h1>
      <button onClick={ incrementCounter }>Increment</button>
    </>
  )
}

export default App;
