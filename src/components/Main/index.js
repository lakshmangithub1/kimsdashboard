import { Link } from 'react-router-dom';
import Footer from '../Footer/index'
import CheckBoxes from '../CheckBoxes/index'; 
import DateDrop from '../DateDrop/index'; 
import NavBar from '../NavBar/index';  
import BasicExample from '../Table/index';
import { IoIosArrowForward } from 'react-icons/io';
import './index.css';


const Main = () => {
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
        <div className='button-card'>
            <Link to = "/document"><button type='button' className='button1'>Next</button></Link>
            <button type='button' className='button2'>Cancle</button>
        </div>
      </div>
    </div>
    
  </div>
  )
}

  
export default Main;
