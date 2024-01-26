import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Suggestions from './components/Suggestions';
import Feedbacks from './components/FeedBacks';
import data from "./data.json"
import Card from './components/FeedBackCard';
import './App.css'



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
    <div>
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
            <Router>
              <Switch>
                <Route path="/">
                  {feedBacks}
                </Route>
              </Switch>
            </Router>
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
      </div>
   
    
  )
}

export default App
