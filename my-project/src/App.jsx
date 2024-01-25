import { useState } from 'react'
import Card from './components/FeedBackCard';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Layout from "./components/Layout"


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout />
      <Card />
    </Router>
    
  )
}

export default App
