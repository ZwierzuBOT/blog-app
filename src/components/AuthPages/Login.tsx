import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "./../../config/firebase.ts";




type blogsTypes = {
    isAuth:boolean
    setIsAuth:React.Dispatch<React.SetStateAction<boolean>>
    user:object
    setUser:React.Dispatch<React.SetStateAction<object>>
}




const Login = (props:blogsTypes) => {


    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogle = async () =>{
        try{
        await signInWithPopup(auth, googleProvider).then((userCredential) => {
            props.setUser(userCredential.user)
        });
        props.setIsAuth(true);
        navigate("/");
        console.log(props.isAuth);
        }catch(err){
            console.error(err);
        }
    }


    const handleLogin = async () =>{
        try{
        await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            props.setIsAuth(true);
            navigate("/");
            console.log(userCredential.user.displayName);
        })
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
            <button className="google blue" onClick={handleGoogle}><FontAwesomeIcon icon={faGoogle} className="w"/> Continue With Google</button>
        </div>
        <div className="buttons">
            <button className="change" onClick={()=>navigate("/SignUp")}>Sign Up</button>
            <button className="submit" onClick={handleLogin}>Login</button>
        </div>
    </div>
     );
}
 
export default Login;