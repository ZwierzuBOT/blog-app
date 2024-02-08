import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "./../../config/firebase.js";


type blogsTypes = {
    isAuth:boolean
    setIsAuth:React.Dispatch<React.SetStateAction<boolean>>
}




const Login = (props:blogsTypes) => {


    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const handleLogin = async () =>{
        console.log(auth);
        try{
        await signInWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.error(err);
        }
    }

    return ( 
        <div className="form">
        <h1>Login</h1>
        <div className="inputs">
        <label htmlFor="email">Email:</label>
            <input type="text" placeholder="..." onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="pass">Password:</label>
            <input type="password" placeholder="..." onChange={(e) => setPassword(e.target.value)}/>
            <button className="google blue"><FontAwesomeIcon icon={faGoogle} className="w"/> Continue With Google</button>
        </div>
        <div className="buttons">
            <button className="change" onClick={()=>navigate("/SignUp")}>Sign Up</button>
            <button className="submit" onClick={handleLogin}>Login</button>
        </div>
    </div>
     );
}
 
export default Login;