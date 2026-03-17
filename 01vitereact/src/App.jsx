import { useState } from 'react'
import Chai from "./Chai"

function App() {
  // const [count, setCount] = useState(0)
  const username="Atreya"
  return (
    // <h1>Atreya ka phla react app</h1>
    <>
      <Chai/>
      <h1>Atreya tiwari</h1>
      <h2>{username} lives in Greater Noida</h2>
      <h3>test para</h3>
    </>
    
  )
}

export default App
