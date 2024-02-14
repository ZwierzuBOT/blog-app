import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type blogsTypes = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  };


const CreateBlogs = (props:blogsTypes) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (props.isAuth !== true) {
          props.setIsAuth(false);
          navigate("/SignUp");
        } else {
          props.setIsAuth(true);
        }
      });

    return ( 
        <div className="create">
            <h1>Create Blogs!</h1>
        </div>
     );
}
 
export default CreateBlogs;