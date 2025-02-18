import React from 'react'
import "../styles/button.css"
import { NavLink } from 'react-router-dom';

const Button = (props) => {
  return (
    <button type={props.type} className= "butt">
    <NavLink to= {props.link} className="navlink">

        <h4>{props.text}</h4>
        </NavLink>
    </button>

  )
}

export default Button
