import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type blogsTypes = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Blogs = (props: blogsTypes) => {
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
        <div className="blogs">
            blogs
        </div>
     );
}
 
export default Blogs;
