
import Sidebar from "../main/sideBar";
import "../../styles/settingsStyles/General.css";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



type blogsTypes = {
    isAuth:boolean
    setIsAuth:React.Dispatch<React.SetStateAction<boolean>>
    user:object
    setUser:React.Dispatch<React.SetStateAction<object>>
}


const General = (props:blogsTypes) => {
    //zrobic by w kazdym podsetting bylo sidebar


    useEffect(() => {
        if (props.isAuth !== true)  {
            props.setIsAuth(false);
            navigate("/SignUp");
        }
    });




    const navigate = useNavigate();
    const logOut =()=>{
        signOut(auth).then(()=>{
            console.log(`logged out`);
            props.setIsAuth(false);
            
            navigate("/SignUp");
        });
    }
    

    return ( 
        <div className="general">
            <div className="side">
                <Sidebar />
            </div>
            <div className="content">
                <h1 id="nameS">Display Name: </h1>
                <button className="logOut" onClick={logOut}>Log Out</button>
            </div>
        </div>
     );
}
 
export default General;