
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import NoPage from './Pages/NoPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      
       <Routes>
           
          <Route index element={<Home/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />   
         
         
         </Routes>
         
         <Footer/>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
