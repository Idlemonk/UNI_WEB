import Navbar from "../components/navbar";
import React from "react";
import { useState } from "react";
import '../styles/login.css'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import '../styles/login.css'

function Login() {
    const navigate = useNavigate()
    const [formdata, setFormData] = useState({
        email: '',
        password: '',
    })
     const [error, setError] = useState('');
     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    
    

     const togglePasswordVisibilty = () => {
        setIsPasswordVisible((prev) => !prev)
     }

     const handleChange = (e) => {
        setFormData({...formdata, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formdata.email || !formdata.password) {
            setError('All fields more filled!')
            return;
        }
        setError('');
        navigate('/dashboard');
    }
    return (
        <>
        <Navbar/>
        <div className="login">
        <h2 style={{textAlign: 'center'}}>Login</h2>
        <form onSubmit={handleSubmit}>
            <label>
           Email: <input type = 'email' name = 'email' value= {formdata.email} placeholder="Enter your email" onChange={handleChange}/>
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
                        {error && <p style={{color: 'red'}}>{error}</p>}
                        <button type="submit" className="formbtn">Login</button>
            </form>
            {/* <p style = {{textAlign: 'center', textDecoration: 'none', color: 'green'}}>Already have an account? <Link to = '/signup'>Signup</Link></p> */}
           <p>Don't have an account?<Link to = '/signup' style = {{textDecoration: 'none', color: 'green'}}> Signup</Link></p>
        </div>
        </>
    )
}
export default Login