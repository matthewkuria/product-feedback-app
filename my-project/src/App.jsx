
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Suggestions from './components/Suggestions';
import Feedbacks from './components/FeedBacks';
import data from "./data.json"
import Card from './components/FeedBackCard';
import './App.css'

const Ui = () => <div className='text-3xl md:w-11/12'>UI Goes Here</div>
const Ux = () => <div className='text-3xl'>UX Goes Here!</div>
const Enhancement = () => <div className='text-3xl'>Enhancement Component Goes Here</div>
const Bug = () => <div className='text-3xl'>Bug Suggestions Goes Here</div>
const Feature = () => <div className='text-3xl'>Feature tag Goes Here</div>
const NotFound = () => <div className='font-bold text-5xl'>404 Not Found</div>;
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
                <Route exact path="/ui" element={<Ui />} />
                <Route exact path="/ux" element={<Ux />} />
                <Route exact path="/enhancement" element={<Enhancement />} />
                <Route exact path="/bug" element={<Bug />} />
                <Route exact path="/feature" element={<Feature />} />
                <Route exact path='*' element={<NotFound />} />
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
