import './styles/App.css';
import "./styles/Auth.css";

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { useState } from 'react';


import Blogs from "./components/main/blogs";
import Login from './components/AuthPages/Login';
import SignUp from './components/AuthPages/SignUp';
import Header from './components/main/header';





function App() {

  const [isLogged, setIsLogged] = useState(false);


  return (

    <Router>
      <div className="App">
        <Header setIsAuth={setIsLogged}/>
        <Routes>
          <Route path='/Login' element={<Login isAuth={isLogged} setIsAuth={setIsLogged} />} />
          <Route path='/SignUp' element={<SignUp isAuth={isLogged}  setIsAuth={setIsLogged} />} />
          <Route path='/' element={<Blogs isAuth={isLogged} setIsAuth={setIsLogged} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
