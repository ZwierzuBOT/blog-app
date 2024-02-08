import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

type blogsTypes = {
    isAuth:boolean
    setIsAuth:React.Dispatch<React.SetStateAction<boolean>>
}




const Login = (props:blogsTypes) => {


    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <button className="submit">Login</button>
        </div>
    </div>
     );
}
 
export default Login;