
import { NavLink } from "react-router-dom";


const Account = () => {
    return ( 
        <div className="acc">
            <div className="sidebar">
                <NavLink to="/settings/general">General</NavLink>
            </div>
        </div>
     );
}
 
export default Account;