import React, { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0)

  const incCounter = () => {
    if(counter != 20){
    setCounter(prevCounter => prevCounter + 1) //this takes previous counter as a callback and then adds 1 to it
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(counter + 1) //whereas this thinks that we are doing the same work, 
    // and since useState updates in batches so it puts it in the same batch and 1 is added only once rather than multiple times
    }
  }

  const decCounter = () => {
    if(counter != 0){
    setCounter(counter - 1)
    }
  }

  return (
    <div>
      <h1>Hi! I am Avinash Ojha.</h1>
      <p>
        I am learning react and creating a project.
      </p>
      <p>Counter value: {counter}</p>
      <button className='counter-button' onClick = {incCounter}>Increase Counter</button>
      <br />
      <button className='counter-button' onClick = {decCounter}>Decrease Counter</button>
    </div>
  )
};

export default App;