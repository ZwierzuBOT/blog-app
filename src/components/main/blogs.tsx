import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect } from "react";

type Blog = {
  tit: string;
  des: string;
  aut: string;
};

type blogsTypes = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  Blogs: Blog[];
  SetBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
};

const Blogs = (props: blogsTypes) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const fetchedBlogs: Blog[] = [];
        querySnapshot.forEach((doc) => {
          fetchedBlogs.push(doc.data() as Blog); 
        });
        props.SetBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    if (props.isAuth) {
      fetchData();
    }
  });

  return (
    <div className="blogs">
      {props.Blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.tit}</h3>
          <p>{blog.des}</p>
          <p>{blog.aut}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
