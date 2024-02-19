import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { auth, googleProvider } from "../../config/firebase.ts";

import { signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import "../../styles/SignUp.css";
//Trzba zrobic name dodac do signup


type blogsTypes = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  User:string;
  SetUser:React.Dispatch<React.SetStateAction<string>>;
};

const SignUp = (props: blogsTypes) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((res) => {
        props.setIsAuth(true);
        if(res.user.displayName !== null){
        props.SetUser(res.user.displayName);
        }
        navigate("/");
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSign = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      navigate("/Login");

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="formS">
      <h1>Sign Up</h1>
      <div className="inputsS">
      <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="..."
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="..."
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          placeholder="..."
          onChange={(e) => setPassword(e.target.value)}
          name="pass"
        />

        <button className="googleS" onClick={handleGoogle}>
          <FontAwesomeIcon icon={faGoogle} className="w" /> Sign Up With Google
        </button>
      </div>
      <div className="buttonsS">
        <button className="submitS" onClick={handleSign}>
          Sign Up
        </button>
        <button className="changeS" onClick={() => navigate("/Login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
