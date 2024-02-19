import "./styles/App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Blogs from "./components/main/blogs";
import Login from "./components/AuthPages/Login";
import SignUp from "./components/AuthPages/SignUp";
import Header from "./components/main/header";
import CreateBlogs from "./components/main/create";



type Blog = {
  tit: string;
  des: string;
  aut: string;
};

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [user, setUser] = useState("");
  return (
    <Router>
      <div className="App">
        <Header setIsAuth={setIsLogged} isAuth={isLogged} />
        <Routes>
          <Route
            path="/Login"
            element={<Login isAuth={isLogged} setIsAuth={setIsLogged}  User={user} SetUser={setUser}/>}
          />
          <Route
            path="/SignUp"
            element={<SignUp isAuth={isLogged} setIsAuth={setIsLogged} User={user} SetUser={setUser}/>}
          />
          <Route
            path="/"
            element={<Blogs isAuth={isLogged} setIsAuth={setIsLogged} Blogs={blogs} SetBlogs={setBlogs}/>}
          />
          <Route
            path="/create"
            element={<CreateBlogs isAuth={isLogged} setIsAuth={setIsLogged} User={user} SetUser={setUser}/>}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
