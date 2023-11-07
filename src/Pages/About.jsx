import React from 'react'
import Navbar from "../components/Navbar"
import ceo from "../Assets/Ceo-img.jpg";
import '../Styles/About.css';
// import bg from "../Assets/pancho1.jpg"

function About() {
  return (
    <div className="about-us" >
      <Navbar/>
      <h3> About Us</h3>
       <div className="prg1"><p className="about-prg"> <mark classsName='group'> Panchovilla group of companies </mark>  continues to grow its 
             focus of becoming the leading provider of essential 
             needs of Real Estate, Oil & Gas, Consultancy and Agriculture 
             in Nigeria. Our vission is to be a world-class enterprise that is 
             passionate about the quality of life of the general populace and high return to 
             stakeholders. Our Mission is to touch lives of  people by providing their basic needs.
             we continue to sustain and improve on our market leadership in all areas.</p> </div>


             <h4 className="executive"> Executive Leadership  </h4>
             <div className="prg2">
              <p id='pa'>Our senior executives bring tremendous experience, 
                 visionary thinking and a shared commitment to excellence, 
                 creativity, and innovation to the day to day operation of the company
             </p></div>

             <div className="CEO-gen-div">
                      
<div className="dive"><img src={ceo} alt="CEOs-Img" className='ceo-img'/></div> 


               <h2  className="ceo-desk">Chief Executive Officer's Desk</h2>
               <div className="prg3"> <p id='pa'>Dr. Ameh Kelechi Wilfred (JP) is the Chairman and Group Managing Director of the 
                Panchovilla Group, one of the fast growing conglomerates in Nigeria.
                
                <br/>  <br/>
                   The group is diversified into other sectors of Nigerian economy 
                   including agriculture, real estate, Pharmaceutical and Consultancy.

                    <br/>  <br/>
                    A graduate of prestigeous University of Nigeria Nsukka (UNN), Kelechi began his business
                    career in 2005 where he ventured into full-scale business. Since then,
                     he has been awarded by different organisations for his commitment towards 
                     the growth of Nigeria's economy.     
                </p></div> 
              </div>  
             
              </div>
  )
}

export default About
