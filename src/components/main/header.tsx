import { NavLink } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
    return ( 
        <div className="header">
            <NavLink to="/" className="link">Blogs</NavLink>
            <NavLink to="/create" className="link">Create</NavLink>
            <NavLink to="/account" className="link">Account</NavLink>
        </div>
     );
}
 
export default Header;