import { useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Blogs.css";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";


type Blog = {
  tit: string;
  des: string;
  aut: string;
  id: string;
  BlogId:string;
  settingsMode:boolean;
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
        updatedBlogs.push({ id: doc.id, ...doc.data(), settingsMode: false } as Blog);
      });
      setBlogs(updatedBlogs);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "blogs", id))
    } catch (error) {
      console.error("Error while deleting blog:", error);
    }
  };

  const handleEdit = (id: string) => {
    console.log("Editing blog with id:", id);
  };

  const toggleSettings = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].settingsMode = !updatedBlogs[index].settingsMode;
    setBlogs(updatedBlogs);
  };

  return (
    <div className="blogs">
      {blogs.map((blog, index) => (
        <div key={index} className="cont">
          <p className="author">{blog.aut}</p>
          <div className="k">
            <FontAwesomeIcon icon={faGear} className="gear" onClick={() => toggleSettings(index)} />
            <h3 className="title">{blog.tit}</h3>
            {blog.settingsMode && isAuth && auth.currentUser?.uid.toString() === blog.id.toString() ? (
              <div className="others">
                <FontAwesomeIcon icon={faEdit} className="emojis" onClick={() => handleEdit(blog.BlogId)} />
                <FontAwesomeIcon icon={faTrashAlt} className="emojis" onClick={() => handleDelete(blog.BlogId)} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <p className="description">{blog.des}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
