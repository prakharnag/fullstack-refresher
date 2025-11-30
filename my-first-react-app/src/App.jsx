import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${title} movies has been liked ${hasLiked}`);
  })
  return (
    <div className= 'card' onClick = {() => setCount((prevState) => prevState + 1)}>
      <h2> { title }<br/> { count }</h2>
      <button onClick = {() => setHasLiked(!hasLiked)}>{hasLiked ? 'Liked' : 'Like'}</button>
    </div>
  )
}

const App = () => {   //This is functional arrow component
  return (
    <>
      <div>
          <h1> My First React App </h1>
      </div>

      <div className="card-container">
        <Card title="The Avengers" />
        <Card title="Spiderman" />
        <Card title="Superman" />
        <Card title="Batman" />
      </div>
    </>
      
  )

  
}

export default App
