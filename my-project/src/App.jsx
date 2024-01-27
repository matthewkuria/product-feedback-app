
import { Routes, Route} from 'react-router-dom';
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
            <Routes>
              
                <Route  path="/" element={<Feedbacks /> } />
                <Route exact path="/all" element={AllFeedBacks} />
                <Route exact path="/ui" element={<Card />} />
                <Route exact path="/ux" element={<Home />} />
                <Route exact path="/enhancement" component={""} />
                <Route exact path="/bug" component={""} />
                <Route exact path="/feature" component={""} />
                <Route exact component={NotFound} />
            </Routes>
           
             
              
                     
                
            
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
