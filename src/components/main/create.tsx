import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

import "../../styles/Create.css";

type blogsTypes = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    User:string;
    SetUser:React.Dispatch<React.SetStateAction<string>>;
  };


const CreateBlogs = (props:blogsTypes) => {

    const navigate = useNavigate();

    
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    


    useEffect(() => {
        if (props.isAuth !== true) {
          props.setIsAuth(false);
          navigate("/SignUp");
        } else {
          props.setIsAuth(true);
        }
      });



      const handleSubmit = async () =>{

        
        try {
            await addDoc(collection(db, "blogs"), {
                tit: title,
                des: description,
                aut: props.User,
            });
        } catch (error) {
            console.error(error);
        }
      }

    return ( 
        <div className="create">
            <h1 id="kupa">Create Blogs!</h1>
            <div className="inputsBlogs">
            <label htmlFor="title">Title:</label>
            <input type="text" placeholder="Write your title here..." name="title" onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="title">Description:</label>
            <textarea id="description" name="description" rows={4} cols={50} placeholder="Write your description here..." onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="buttonsBlogs">
                <button id="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
     );
}
 
export default CreateBlogs;