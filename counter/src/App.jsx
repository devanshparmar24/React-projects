import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  // let counter = 15

  const addValue = ()=>{
    if(counter===20) return 
    setCounter(counter+1 )
  }

  const removeValue = ()=>{
    if(counter===0) return
    setCounter(counter-1)

  }

  return (
  <>
    
    <h1>useState</h1>
    <h2>Counter :{counter}</h2>
    <button
    onClick={addValue}>Add value</button>
    <br />
    <button
    onClick={removeValue}>remove value</button>
  </>    
  )
}

export default App
