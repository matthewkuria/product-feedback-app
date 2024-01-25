import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Layout from "./components/Layout"


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout />
    </Router>
    
  )
}

export default App
