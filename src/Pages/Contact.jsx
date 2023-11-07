import React from 'react'
import Navbar from "../components/Navbar";
import  backgroungImage from "../Assets/panchorefine.jpg";
import '../Styles/Contact.css';

function Contact() {
  return (
      <div className="main">
        <Navbar/>

     <div className="contact1">
      
      < div className="leftContact1" > <img className="leftContact" src={backgroungImage} alt='bg-img'/> </div>

     <div className="rightContact"> 
     <div className="heech"><h4>Contact Us</h4></div>

      <form id="contact-form" method='POST'>
        <div className="write"><label htmlFor="name" id='z'>Full Name</label></div>
        <input name="name" placeholder='Enter full name...' type='text' />
         <div className="write"><label htmlFor="email" id='z'>Email</label></div>
          <input name='email' placeholder='Enter email...' type="email" />
          <div className="write"><label htmlFor="message" id='z'> Message</label></div>
           
            <textarea 
               name="textarea" 
               id="textarea" 
               cols="15" 
               rows="6"
               placeholder="Enter Message...">
            </textarea>
            <div className="bnt" ><button type='submit'>Send Message</button></div>
      </form>
     </div>

    
    </div>

    </div>
  );
}

export default Contact
