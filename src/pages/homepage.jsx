import React, { useState } from "react";
import '../styles/homepage.css'
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function Homepage () {
    const navigate = useNavigate();
    navigate('/signup');
    
    
    return (
    <>
    <Navbar/>
    <div className="home-body">
        <div className="overlay">
        <h1 className="first">Smart Applications, Smarter Future – Get AI-Powered Admission Assistance</h1>
      <p><em>We make finding your best fit university, simple, successful and stress free!</em></p>
        <button className='homebtn' onClick={() => navigate("/signup")}>Get started</button>
        </div>
      
        </div>
        <div className="more">
            <h2>So</h2>
        </div>
       
    </>
)
}
export default Homepage