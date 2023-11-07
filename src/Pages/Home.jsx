import React from 'react'
import Navbar from "../components/Navbar"
import '../Styles/Home.css';
import mainLogo from '../Assets/pachoLogo.jpg';
// import { Block } from '@mui/icons-material';
// import typed from 'react-typed';

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className='headerContainer'>
            <div className='container'><h1 className='text'>PANCHOVILLA GROUP OF COMPANIES LIMITED</h1></div>
            <div className='excel'><p className='excell'>HOME OF EXCELLENCE...</p></div>
            <div className='mainLogo'><img className='mainLogo' src={mainLogo} alt="logo" /> </div> 
             
              
              
              <div className='sub'><h1>Subsidiaries & Services</h1>

              
            <div className='subsidiaries'>
              <span> <h5 className='sp'>PANCHOVILLA GLOBAL SYNERGY NIG. LTD:</h5>
                <br />
               <div className="cent"> 
                <p id='x'> 1. Real Estate Development</p>
                <p id='x'> 2. Land and Housing </p>
                <p id='x'> 3. Construction and Maintenance</p>
                <p id='x'> 4. Project Management</p>
                <p id='x'> 5. Building Construction</p>
                <p id='x'> 6. Supplies and General Contracts</p></div>
              </span>
              <span> <h5 className='sp'>PANCHOVILLA INVESTMENTS LIMITED:</h5>
              <br />
              <div className='cent'> 
                <p id='x'> 1. Oil and Gas</p>
                <p id='x'> 2. Petrochemicals </p>
                <p id='x'> 3. Automobiles</p>
                <p id='x'> 4.Haulage and Logistics</p>
                <p id='x'> 5. General Merchandise and Contracts</p></div>
              </span>

              <span>  <h5 className='sp'>PANCHOVILLA INTEGRATED RESOURCES LIMITED:</h5> 
                  <br />
                <div className="cent">
                <p id='x'> 1. Agricultural Businesses</p>
                <p id='x'> 2. Agro-Allied Services</p>
                <p id='x'> 3. Manufacturing</p>
                <p id='x'> 4. Health Care</p>
                <p id='x'> 5. Hospitality</p></div>
              </span>

              <span> <h5 className='sp'>PANCHOVILLA ENTERPRISES NIG. LTD:</h5>
              <br />
                <div className="cent1">
                <p id='x'> 1. Information and Communication Technology (ICT)</p>
                <p id='x'> 2. Travelling Agency</p>
                <p id='x'> 3. Marketing and Advertising</p>
                <p id='x'> 4. Security Gadgets </p>
                <p id='x'> 5. General Computer Merchandise, Contracts and Services</p></div>
              </span></div>
                </div>
             
        </div>
      
      
    </div>
  )
}

export default Home
