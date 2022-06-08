import React from 'react'
import { Link } from "react-router-dom";
 import Header from '../Components/Header'; 

function Home() {
  return (
    <div>
    <Header/>
    </div>,
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
          {/* Endpoint to route to About component */}
          <Link to="/Login">GİRİŞ YAPMAK İÇİN TIKLAYINIZ</Link>
        
      
    </div>
  )
}

export default Home