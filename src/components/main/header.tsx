import { NavLink } from "react-router-dom";
import "../../styles/Header.css";

import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


type blogsTypes = {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};


const Header = (props:blogsTypes) => {

const navigate = useNavigate();


const logOut = async () =>{
    await signOut(auth).then(()=>{
        props.setIsAuth(false);
        navigate("/")
    });
}

    return ( 
        <div className="header">
            <NavLink to="/" className="link">Blogs</NavLink>
            <NavLink to="/create" className="link">Create</NavLink>
            <button className="link" onClick={logOut}>Log Out</button>
        </div>
     );
}
 
export default Header;