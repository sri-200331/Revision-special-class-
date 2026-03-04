// import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <h1>Auth app</h1>
      <Link to='/'>Register</Link>
      <Link to='/login'>Login</Link>

    
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
