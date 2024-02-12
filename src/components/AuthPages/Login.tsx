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
    user: { name: string }; 
    setUser: React.Dispatch<React.SetStateAction<{ name: string }>>;
};






const Login = (props:blogsTypes) => {


    
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogle = async () =>{
        try{
        await signInWithPopup(auth, googleProvider).then((res) => {
            const name = res.user?.displayName || "";
            props.setUser({name:name});
        });
        props.setIsAuth(true);
        navigate("/");
        }catch(err){
            console.error(err);
        }
    }


    const handleLogin = async () =>{
        try{
        await signInWithEmailAndPassword(auth, email, password).then(()=>{
            props.setIsAuth(true);
            props.setUser({name:name});
            navigate("/");
        })
        }catch(err){
            console.error(err);
        }
    }

    return ( 
        <div className="form">
        <h1>Login</h1>
        <div className="inputs">
        <label htmlFor="name">Name:</label>
         <input type="text" placeholder="..." onChange={(e) => setName(e.target.value)} name="name"/>
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