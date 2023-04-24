import { CgProfile } from 'react-icons/cg';
import { TiMessages } from 'react-icons/ti';
import { RiBillLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import './index.css'

const NavBar = () => {
  return (
    <div className='nav-card'> 
        <h3 className='nav-head'>KIMS</h3>
        <div className='s-nav'>
            <div className='nav-links'>
                <RiDashboard3Line className='nav-logos'/>
                <p className='nav-para'>Dashboard</p>
            </div>
            <div  className='nav-links2'>
                <TiMessages className='nav-logos'/>
                <p className='nav-para'>Counselling</p>
            </div>
            <div  className='nav-links'>
                <RiBillLine className='nav-logos'/>
                <p className='nav-para'>Track Bills</p>
            </div>
        </div> 
        <div className='nav-links'>
            <p className='nav-para'>Abhishek Chowdhury</p>
            <CgProfile className='profile-logo'/>
        </div>
      
    </div>
  )
}

export default NavBar
