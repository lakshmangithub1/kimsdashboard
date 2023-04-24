import Footer from './components/Footer'; 
import CheckBoxes from './components/CheckBoxes'; 
import DateDrop from './components/DateDrop'; 
import NavBar from './components/NavBar'; 

import { IoIosArrowForward } from 'react-icons/io';
import './App.css';


function App() {
  return (
    <div className='app'> 
      <NavBar/>  
      <div className='nav-down'>
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
          <div className='head-card'>
            <h2 className='second-head'>Total Estimated Amount</h2>
            <h2 className='second-head'>Rs. 2,25,000.00</h2>

          </div> 
        
          <Footer/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
