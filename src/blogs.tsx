
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type blogsTypes = {
    isAuth:boolean
}


const blogs = (props: blogsTypes) => {
    
    const navigate = useNavigate();
    useEffect(()=>{
        navigate(props.isAuth === true ? "/" : "/SignUp") 
    }, [])
    return ( 
        <div className="blogs">
            blogs
        </div>
     );
}
 
export default blogs;
