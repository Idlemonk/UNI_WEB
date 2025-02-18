import React from "react";
import Sidebar from "../components/sidebar";
import '../styles/dashboard.css'

function Dashboard() {
    return (
        <>
       <div>
        <div className='profile-main'>
        <Sidebar/>
        <div className="profile">
        <h1>Hi, welcome Back Korede!</h1>
        </div>
        </div>
      
    </div>
        </>
    )
}
export default Dashboard