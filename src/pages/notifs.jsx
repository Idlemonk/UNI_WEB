import React from "react";
import Sidebar from "../components/sidebar";
import '../styles/notifs.css'

function Notifs() {
    return (
        <>
        <div>
        <div className='notifs-main'>
        <Sidebar/>
        <div className="notifs">
        <h1>Your notifs</h1>
        </div>
        </div>
      
    </div>
        </>
    )
}
export default Notifs