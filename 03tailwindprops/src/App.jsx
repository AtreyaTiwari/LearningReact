import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    name:"Atreya", age:"21"
    
  }
  let newArr=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'
      >Tailwind Css</h1>
      <Card channel="learning react" someObj={myObj}/>
      {/* <Card arr={newArr}/> */}
    </>
  )
}

export default App
