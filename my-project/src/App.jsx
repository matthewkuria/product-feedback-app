import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import NavMenu from './components/NavMenu'
import Suggestions from './components/Suggestions'
import Feedbacks from './components/FeedBacks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="nav-bar md:flex lg:flex-col">
          <div className="lg:flex">
            <div className="md:flex lg:flex-col">
            <NavBar /> 
            <div className="md:flex lg:flex">
              <NavMenu />
              </div>      
            </div>
            <div className="">
              <Suggestions />
              <Feedbacks />
            </div>
          </div>
          <div className="md:hidden lg:hidden">
          <NavMenu />
          </div>
        </div>

        <div className=" hidden md:hidden">
          <Suggestions />
        </div>
        <div className=" hidden md:hidden">
        <Feedbacks />
        </div>
      </Router>
    </>
  )
}

export default App
