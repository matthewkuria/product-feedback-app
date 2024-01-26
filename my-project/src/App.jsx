
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Suggestions from './components/Suggestions';
import Feedbacks from './components/FeedBacks';
import data from "./data.json"
import Card from './components/FeedBackCard';
import './App.css'

const Home = () => <div>Home</div>
const NotFound = () => <div>404 Not Found</div>;
function App() {
 
  const dataArray = data.productRequests
  const AllFeedBacks = dataArray.map((item) =>{
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
      <Link to="/ui" className="text-white py-1 px-3 bg-[#4661E6] rounded-lg hover:bg-[#CFD7FF]">ALL </Link> 
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
                <Route path="/" component={Feedbacks} />
                <Route exact path="/all" element={AllFeedBacks} />
                <Route exact path="/ui" component={Card} />
                <Route exact path="/ux" component={""} />
                <Route exact path="/enhancement" component={""} />
                <Route exact path="/bug" component={""} />
                <Route exact path="/feature" component={""} />
                <Route exact component={NotFound} />
              </Switch>
            </Router>           
            {AllFeedBacks}        
            
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
