
import './styles/App.css'

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'


import Blogs from "./components/main/blogs";
import Login from './components/AuthPages/Login';
import SignUp from './components/AuthPages/SignUp';
import General from "./components/Settings/General";



import { useState } from 'react';
import Header from './components/main/header';


function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<{ name: string }>({ name: '' });



  return (

    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/Login' element={<Login isAuth={isLogged} setIsAuth={setIsLogged} />} />
          <Route path='/SignUp' element={<SignUp isAuth={isLogged}  setIsAuth={setIsLogged} User={user} SetUser={setUser}/>} />
          <Route path='/' element={<Blogs isAuth={isLogged} setIsAuth={setIsLogged} />} />
          <Route path='/Settings/general' element={<General isAuth={isLogged} setIsAuth={setIsLogged} User={user} SetUser={setUser}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
