import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }

  return (
    <>   
    <h1 className='bg-green-400 text-black'  >tailwind test</h1>
    <Card username="chaiaurcode" btnText="click me"/>






    </>
  )
}

export default App
