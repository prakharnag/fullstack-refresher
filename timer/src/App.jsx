import { useState } from 'react'
import Timer from './components/Timer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0)

  return(
    <div>
      <Timer />
      
    </div>
  )
}

export default App
