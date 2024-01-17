import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Suggestions from './components/Suggestions'
import Feedbacks from './components/FeedBacks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Suggestions />
      <Feedbacks />
      
    </>
  )
}

export default App
