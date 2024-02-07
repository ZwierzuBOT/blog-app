import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    return ( 
        <div className="form">
            <h1>Sign Up</h1>
            <div className="inputs">
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="..." onChange={(e) => setEmail(e.target.value)} name="email"/>
                <label htmlFor="pass">Password:</label>
                <input type="text" placeholder="..." onChange={(e) => setPassword(e.target.value)} name="pass"/>
            </div>
            <div className="buttons">
                <button className="submit">Sign Up</button>
                <button className="change" onClick={()=>navigate("/Login")}>Login</button>
            </div>
        </div>
     );
}
 
export default SignUp;