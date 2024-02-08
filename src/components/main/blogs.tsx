import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

type blogsTypes = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Blogs = (props: blogsTypes) => {
    const navigate = useNavigate();

    useEffect(() => {
        const storedIsAuth = localStorage.getItem("isAuth");

        if (storedIsAuth === "true") {
            props.setIsAuth(true);
            navigate("/");
        } else {
            props.setIsAuth(false);
            navigate("/SignUp");
        }
    }, []);



    const [blogs, setBlogs] = useState([]);



    return ( 
        <div className="blogs">
            blogs
        </div>
     );
}
 
export default Blogs;
