import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage'
import Login from './components/login'
import Signup from './components/signup'
import Dashboard from './pages/dashboard'
import Admission from './pages/admission'
import Notifs from './pages/notifs'
function App() {
 

  return (
    <>
    
    <Router>
      <Routes>
        <Route path = '/' element ={ <Homepage/>}/> 
        <Route path = '/login' element ={ <Login/>}/>
        <Route path = '/signup' element ={ <Signup/>}/>
        <Route path ='/dashboard' element ={<Dashboard/>}/>
        <Route path = '/notifs' element = {<Notifs/>}/>
        <Route path = '/admission' element = {<Admission/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
