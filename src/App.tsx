
import './App.css'

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'


import Blogs from "./blogs";
import Login from './components/AuthPages/Login';
import SignUp from './components/AuthPages/SignUp';

import { useEffect, useState } from 'react';

function App() {
 
  const [isLogged, setIsLogged] = useState(false);
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/' element={<Blogs isAuth={isLogged} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
