import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

  // let counter=15
  const incValue=()=>{
    // counter=counter+1
    // setCounter(counter)
    setCounter(counter+1)
    console.log("value increased",counter);
  }
  const decValue=()=>{
    counter=counter-1
    setCounter(counter)
    console.log("value decreased",counter);
  }
  return (
    <>
      <h1>Beedi aur bun</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={incValue}
      >Inc Value</button><br />
      <button
      onClick={decValue}
      >Dec Value</button>
    </>
  )
}

export default App
