import { useState } from 'react'
import data from "./data.json"
import Card from './components/FeedBackCard';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Layout from "./components/Layout"


function App() {
 
  const dataArray = data.productRequests
  const feedBacks = dataArray.map((item) =>{
    return(
      <Card 
        id={item.id}
        title={item.title}
        desc={item.description}
        category={item.category}
        upvotes={item.upvotes}
        status={item.status}
        comments={item.comments}

      />
    )

  })

  return (
    <Router>
      <Layout />
      {feedBacks}
    </Router>
    
  )
}

export default App
