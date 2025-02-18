import Navbar from "../components/navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from 'react-router-dom'
import '../styles/signup.css'

function Signup() {
  const [formdata, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const togglePasswordVisibilty = () => {
   setIsPasswordVisible((prev) => !prev)
  }
  
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev)
  }
  const handleChange = (e) => {
    setFormData({...formdata, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formdata.fullname  || !formdata.email || !formdata.password || !formdata.confirmpassword) {
      setErrorMessage('Please fill all the fields')
      return;
    } 

    if (formdata.password !== formdata.confirmpassword) {
      setErrorMessage('Passwords do not match!')
      return;
    }
    setErrorMessage(""); 
    navigate("/login");
  }

    return (
        <>
        <Navbar/>

        <div className="signup">
        <h2 style = {{textAlign: 'center', marginTop: '0'}}>Signup</h2>
        
          <form onSubmit={handleSubmit}>
            <label>
           Fullname: <input type = 'text' name = 'fullname' value= {formdata.fullname} placeholder="Enter your name" onChange={handleChange}/>
            </label>


            <label>
              Email: <input type = 'email'  name = 'email' value ={formdata.email} placeholder=""  onChange={handleChange}/>
            </label>

            <label>
              Password:
            <div className="input">
              <input type= {isPasswordVisible ? 'text' : 'password'} name= 'password' value = {formdata.password} placeholder="" onChange={handleChange}/>
              <button  className = 'eye' type='button' onClick={togglePasswordVisibilty} onChange={handleChange}>
                {isPasswordVisible ? (
              <LuEye style={{ color: "#4B5563" }} />
                     ) : (
              <LuEyeClosed style={{ color: "#4B5563" }} />
                )}
                </button>
                </div>
            </label>

            <label>
              Confirm password: 
              <div className="input">
              <input type= {isConfirmPasswordVisible ? 'text' : 'password'} name= 'confirmpassword' value = {formdata.confirmpassword} placeholder="" onChange={handleChange}/>
              <button  className = 'eye' type='button' onClick={toggleConfirmPasswordVisibility} onChange={handleChange}>
                {isConfirmPasswordVisible ? (
              <LuEye style={{ color: "#4B5563" }} />
                     ) : (
              <LuEyeClosed style={{ color: "#4B5563" }} />
                )}
                </button>
                </div>
            </label>

            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            <button type="submit" className="formbtn">Sign Up</button>
          </form>
          <p style = {{textAlign: 'center'}}>Already have an account? <Link  className= 'links' to = '/login' style = {{textDecoration: 'none', color: 'green'}}>Login</Link></p>
        </div>
        
        </>
    )
}
export default Signup