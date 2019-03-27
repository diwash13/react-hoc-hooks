import React, { useState, useEffect } from 'react';

function ChildComp(props) {
  return (
    <div>
      <h1>i am child, name iz {props.name}</h1>
    </div>
  )
}

export default function App2(props) {
  const [counter, setCounter] = useState(10); // [10, function() {}]
  const [name, setName] = useState('') // ['', function() {}]
  const [formState, setFormState] = useState({ userInput: '', dataInput: '' })

  useEffect(() => {
    console.log('hi there')
  }, [counter])
  return (
    <div>
      <h1>Hooks!</h1>
      <ChildComp name={name} />
      <button onClick={() => setCounter('joe')}>click</button>
      {counter}
      <p>Type name: <input onChange={(e) => setName(e.target.value)} type="text" /></p>
      {name}
    </div>
  )
}