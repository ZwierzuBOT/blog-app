import { collection, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Blogs.css";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

type Blog = {
  tit: string;
  des: string;
  aut: string;
  id: string;
};

type BlogsProps = {
  isAuth: boolean;

};

const Blogs = ({ isAuth }: BlogsProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const updatedBlogs: Blog[] = [];
      snapshot.forEach((doc) => {
        updatedBlogs.push({ id: doc.id, ...doc.data() } as Blog);
      });
      setBlogs(updatedBlogs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="blogs">
      {blogs.map((blog, index) => (
        <div key={index} className="cont">
          <p className="author">{blog.aut}</p>
          <h3 className="title">{blog.tit}</h3>
          <p className="description">{blog.des}</p>
          

          {isAuth && auth.currentUser?.uid.toString() === blog.id.toString() ? (
            <div className="others">
              <FontAwesomeIcon icon={faEdit} className="edit" />
              <FontAwesomeIcon icon={faTrashAlt} className="delete" />
            </div>
          ):(
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blogs;
