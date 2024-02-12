import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "./../../config/firebase.ts";


import "../../styles/Login.css"



type blogsTypes = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    User: { name: string };  
    SetUser: React.Dispatch<React.SetStateAction<{ name: string }>>;
};






const Login = (props:blogsTypes) => {


    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogle = async () =>{
        try{
        await signInWithPopup(auth, googleProvider).then((userCredential)=>{
            props.SetUser({name : userCredential.user.displayName === null ? "" : userCredential.user.displayName });
            props.setIsAuth(true);
            navigate("/");
        });
        }catch(err){
            console.error(err);
        }
    }


    const handleLogin = async () =>{
        try{
        await signInWithEmailAndPassword(auth, email, password).then(()=>{
            props.setIsAuth(true);
            navigate("/");
        })
        }catch(err){
            console.error(err);
        }
    }

    return ( 
        <div className="formS">
        <h1>Login</h1>
        <div className="inputsS">
        <label htmlFor="email">Email:</label>
            <input type="text" placeholder="..." onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="pass">Password:</label>
            <input type="password" placeholder="..." onChange={(e) => setPassword(e.target.value)}/>
            <button className="googleS blue" onClick={handleGoogle}><FontAwesomeIcon icon={faGoogle} className="w"/> Continue With Google</button>
        </div>
        <div className="buttonsS">
            <button className="changeS" onClick={()=>navigate("/SignUp")}>Sign Up</button>
            <button className="submitS" onClick={handleLogin}>Login</button>
        </div>
    </div>
     );
}
 
export default Login;