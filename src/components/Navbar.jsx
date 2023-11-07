import React, { useState } from 'react'
import Navlogo from "../Assets/pachoLogo.jpg";
import {Link} from "react-router-dom";
// import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css';


function Navbar() {

const [openLinks, setOpenLinks] = useState(false);

const toggleNavbar =  () => {
  setOpenLinks(! openLinks);
}; 


  return (
    <div className="navbar">

        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <div className='navlog'><img src={Navlogo} alt='#'/></div>
          
         <div className='hiddenLinks'>
         <Link to="/"></Link> 
         <Link to="/Home">Home</Link>
         <Link to="/About">About</Link>
         <Link to="/Contact">Contact</Link>
         </div>
        </div>

        <div className='rightSide'>
         <Link to="/"></Link>
         <Link to="/Home">Home</Link>
         <Link to="/About">About</Link>
         <Link to="/Contact">Contact</Link>
         {/* <button onClick={toggleNavbar}>
          <ReorderIcon/>
          </button> */}
        </div>
    
    </div>
  );
}

export default Navbar;