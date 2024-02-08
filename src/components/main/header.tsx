import { NavLink } from "react-router-dom";


const Header = () => {
    return ( 
        <div className="header">
            <NavLink to="/">Blogs</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/account">Account</NavLink>
        </div>
     );
}
 
export default Header;