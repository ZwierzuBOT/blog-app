
import './styles/App.css'
import "./styles/Auth.css"

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'


import Blogs from "./components/main/blogs";
import Login from './components/AuthPages/Login';
import SignUp from './components/AuthPages/SignUp';
import General from "./components/Settings/General";




import { useState } from 'react';
import Header from './components/main/header';


function App() {

  const [isLogged, setIsLogged] = useState(false);
  
  const [player, setPlayer] = useState<{ name: string }>({ name: "" });

  return (

    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/Login' element={<Login isAuth={isLogged} setIsAuth={setIsLogged} user={player} setUser={setPlayer}/>} />
          <Route path='/SignUp' element={<SignUp isAuth={isLogged}  setIsAuth={setIsLogged} user={player} setUser={setPlayer}/>} />
          <Route path='/' element={<Blogs isAuth={isLogged} setIsAuth={setIsLogged} />} />
          <Route path='/Settings/general' element={<General isAuth={isLogged} setIsAuth={setIsLogged} user={player} setUser={setPlayer} />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
