import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
        <div className="form">
        <h1>Login</h1>
        <div className="inputs">
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="buttons">
            <button className="submit">Login</button>
            <button className="change" onClick={()=>navigate("/SignUp")}>Sign Up</button>
        </div>
    </div>
     );
}
 
export default Login;