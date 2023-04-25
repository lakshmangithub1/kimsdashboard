
import Footer from './components/Footer'; 
import CheckBoxes from './components/CheckBoxes'; 
import DateDrop from './components/DateDrop'; 
import NavBar from './components/NavBar';  
import BasicExample from './components/Table';
import { IoIosArrowForward } from 'react-icons/io';
import './App.css';


const App = () => {
  return(
    <div className='app'> 
    <NavBar/>  
    <div className='nav-downs'>
      <p className='nav-down-para1'>Dashboard</p> 
      <IoIosArrowForward/>
      <p className='nav-down-para2'>Counselling</p>
    </div>
    <div className='app2'>
      <div className='white-bg'>
        <h2 className='first-head'>Finacial Counselling</h2> 
        <DateDrop/>
        <CheckBoxes/> 
        
      </div>
      <div className='white-bg'> 
         
        <BasicExample/>
      
        <Footer/>
      </div>
    </div>
    
  </div>
  )
}

  
export default App;
