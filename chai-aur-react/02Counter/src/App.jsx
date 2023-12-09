import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)
//let counter=15;

const addvalue= ()=>{
  
  if (counter<=19) {
    counter+=1;
  setCount(counter);
  }

}

const disvalue= ()=>{
  counter-=1;
  setCount(counter);
}


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}  >Add value</button>
      <button onClick={disvalue}>Decrease value</button>

    </>
  )
}

export default App
