// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import hero from './assets/hero.png'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="hero">
      <div className="hero_text" style={{ float: 'left', width: '50%', textAlign: 'left' }}>
        <h1>Yap App</h1>
        <h3>Tired of pointless drills and endless vocabulary lists? Yap is the solution. We will help you start speaking in no time.</h3>
      </div>
      <div className="hero_img" style={{ float: 'right', width: '50%' }}>
        <img src={hero} alt="hero" />
      </div>
    </div>
  )
}

export default App
