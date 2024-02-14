import { NavLink } from "react-router-dom";
import "../../styles/Header.css";

import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type blogsTypes = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = (props: blogsTypes) => {
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth).then(() => {
      props.setIsAuth(false);
      navigate("/");
    });
  };

  return (
    <div className="header">
      <NavLink to="/" className="link">
        Blogs
      </NavLink>

      {props.isAuth === true ? (
        <NavLink to="/create" className="link">
          Create
        </NavLink>
      ) : (
        <NavLink to="/Login" className="link">
          Login
        </NavLink>
      )}


      {props.isAuth === true ? (
        <button className="link" onClick={logOut}>
          Log Out
        </button>
      ) : (
        <NavLink to="/SignUp" className="link">
          Sign Up
        </NavLink>
      )}
    </div>
  );
};

export default Header;
