import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App-div">
        <ul className="navbar">
          <li className="logo">SpinCard</li>
          <li>Le score</li>
          <li>A propos</li>
          <li>Aide</li>
          <li><button> Lancer </button></li>
        </ul>
      </div>      
  )
}

export default App
