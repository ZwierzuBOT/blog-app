
import { NavLink } from "react-router-dom";


const sideBar = () => {
    //zrobic tak jak roblox
    return ( 
        <div className="acc">
            <div className="sidebar">
                <NavLink to="/settings/general">General</NavLink>
                <NavLink to="/settings/security">Security</NavLink>
                <NavLink to="/settings/subscriptions">Subscriptions</NavLink>
                <NavLink to="/settings/parental-control">Parental Control</NavLink>
            </div>
        </div>
     );
}
 
export default sideBar;