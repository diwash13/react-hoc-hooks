import React, { useState } from 'react';

export default function App2() {
  const [counter, setCounter] = useState(10);
  const [name, setName] = useState('')

  return (
    <div>
      <h1>Hooks!</h1>
      <button onClick={() => setCounter(counter + 1)}>click</button>
      {counter}
      <p>Type name: <input onChange={(e) => setName(e.target.value)} type='text' /> </p>
      {name}
    </div>
  )
}