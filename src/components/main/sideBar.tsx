
import { NavLink } from "react-router-dom";

import "../../styles/Sidebar.css";

const sideBar = () => {
    //zrobic tak jak roblox
    return ( 
            <div className="sidebar">
                <NavLink to="/settings/general" className="sideLinks">General</NavLink>
                <NavLink to="/settings/security" className="sideLinks">Security</NavLink>
                <NavLink to="/settings/subscriptions" className="sideLinks">Subscriptions</NavLink>
                <NavLink to="/settings/parental-control" className="sideLinks">Parental Control</NavLink>
            </div>
     );
}
 
export default sideBar;