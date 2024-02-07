
import './styles/App.css'
import "./styles/Auth.css"

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'


import Blogs from "./blogs";
import Login from './components/AuthPages/Login';
import SignUp from './components/AuthPages/SignUp';

import { useState } from 'react';




function App() {
 
  const [isLogged, setIsLogged] = useState(false);
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/Login' element={<Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/' element={<Blogs isAuth={isLogged} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
