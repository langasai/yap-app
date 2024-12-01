import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import hero from './assets/hero.png'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="hero">
        <img src={hero} alt="hero" />
      </div>
    </>
  )
}

export default App
