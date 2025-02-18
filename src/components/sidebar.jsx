import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/sidebar.css'

function Sidebar() {
  return (
    <>
      <div className="nav-two">
      
      <NavLink 
        to="/dashboard"
        className="link-two" style={({isActive}) => {
          return isActive ?  {
              color: ' rgb(71, 114, 116)',
              backgroundColor: "cadetblue",
            borderRadius: "3px",
          } : {
            color: 'rgba(241, 241, 250, 1)'
        }
        }}>
         Dashboard
        </NavLink>

         <NavLink 
       to="/admission" 
        className="link-two" style={({isActive}) => {
          return isActive ?  {
              color: ' rgb(71, 114, 116)',
              backgroundColor: "cadetblue",
            borderRadius: "3px",
          } : {
            color: 'rgba(241, 241, 250, 1)'
        }
        }} >
         
          Admission Form
        </NavLink>

        <NavLink 
        to="/notifs" 
        className="link-two"  style={({isActive}) => {
          return isActive ?  {
              color: ' rgb(71, 114, 116)',
              backgroundColor: "cadetblue",
            borderRadius: "3px",
          } : {
            color: 'rgba(241, 241, 250, 1)'
        }
        }}>
          Notifications
        </NavLink>

      
      </div> 
    </>
  );
}
export default Sidebar;
