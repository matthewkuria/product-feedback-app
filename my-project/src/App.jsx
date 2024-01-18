import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import NavMenu from './components/NavMenu'
import Suggestions from './components/Suggestions'
import Feedbacks from './components/FeedBacks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="nav-bar md:flex lg:flex-col  ">
        <div className="">
        <NavBar />
        </div>
        <div className="md:mt-5">
        <NavMenu />
        </div>
      </div>
      <Suggestions />
      <Feedbacks />
      
    </>
  )
}

export default App
