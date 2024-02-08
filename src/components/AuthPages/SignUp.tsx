import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


import { auth, googleProvider } from "../../config/firebase.js";

import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

type blogsTypes = {
    isAuth:boolean
    setIsAuth:React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp = (props:blogsTypes) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleGoogle = async () =>{
        try{
        await signInWithPopup(auth, googleProvider);
        props.setIsAuth(true);
        localStorage.setItem("isAuth", "true");
        navigate("/");
        console.log(props.isAuth);
        }catch(err){
            console.error(err);
        }
    }


    const handleSign = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/Login")
        }catch(err){
            console.error(err);
        }
    }



    return ( 
        <div className="form">
            <h1>Sign Up</h1>
            <div className="inputs">
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="..." onChange={(e) => setEmail(e.target.value)} name="email"/>
                <label htmlFor="pass">Password:</label>
                <input type="password" placeholder="..." onChange={(e) => setPassword(e.target.value)} name="pass"/>

                <button className="google blue" onClick={handleGoogle}><FontAwesomeIcon icon={faGoogle} className="w"/> Sign Up With Google</button>
            </div>
            <div className="buttons">
                <button className="submit" onClick={handleSign}>Sign Up</button>
                <button className="change" onClick={()=>navigate("/Login")}>Login</button>
            </div>
        </div>
     );
}
 
export default SignUp;