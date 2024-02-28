import React, { useState } from "react";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Blogs.css";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

//ZROBIC Z LICZNIK CZRWNOY GDY ZA DUZO

type Blog = {
  tit: string;
  des: string;
  aut: string;
  id: string;
  BlogId: string;
  settingsMode: boolean;
  editMode: boolean;
  licznikTit: number;
  licznikDes: number;
  cnTit: string;
  cnDes: string;
};

type BlogsProps = {
  isAuth: boolean;
};

const Blogs = ({ isAuth }: BlogsProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const updatedBlogs: Blog[] = [];
      snapshot.forEach((doc) => {
        updatedBlogs.push({
          id: doc.id,
          ...doc.data(),
          settingsMode: false,
          editMode: false,
          licznikTit: 0,
          licznikDes: 0,
          cnTit: "licznik",
          cnDes: "licznik",
        } as Blog);
      });
      setBlogs(updatedBlogs);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "blogs", id));
    } catch (error) {
      console.error("Error while deleting blog:", error);
    }
  };

  const toggleSettings = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].settingsMode = !updatedBlogs[index].settingsMode;
    setBlogs(updatedBlogs);
  };

  const toggleEdit = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].editMode = !updatedBlogs[index].editMode;
    setBlogs(updatedBlogs);
  };

  const editSubmit = async (index: number) => {
    const updatedBlogs = [...blogs];
    const blogToUpdate = updatedBlogs[index];

    try {
      if (blogToUpdate.licznikTit <= 25 && blogToUpdate.licznikDes <= 500) {
        await updateDoc(doc(db, "blogs", blogToUpdate.BlogId), {
          tit: updatedTitle || blogToUpdate.tit,
          des: updatedDescription || blogToUpdate.des,
        });

        updatedBlogs[index].tit = updatedTitle || blogToUpdate.tit;
        updatedBlogs[index].des = updatedDescription || blogToUpdate.des;
      } else {
        updatedBlogs[index].editMode = true;

        console.log("Title or description exceeds the character limit.");
      }
    } catch (error) {
      console.error("Error while updating blog:", error);
    }

    // Do not set editMode to false here
    setBlogs(updatedBlogs);
  };

  const licznikFn = (
    index: number,
    fanta: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (fanta === "tit") {
      blogs[index].licznikTit = e.target.value.length;
      blogs[index].licznikTit > 25
        ? (blogs[index].cnTit = "licznikWrong")
        : (blogs[index].cnTit = "licznik");
    } else if (fanta === "des") {
      blogs[index].licznikDes = e.target.value.length;
      blogs[index].licznikDes > 25
        ? (blogs[index].cnDes = "licznikWrong")
        : (blogs[index].cnDes = "licznik");
    }
  };

  return (
    <div className="blogs">
      {blogs.map((blog, index) => (
        <div key={index} className="cont">
          <p className="author">{blog.aut}</p>
          <div className="k">
            {isAuth &&
            auth.currentUser?.uid.toString() === blog.id.toString() ? (
              <FontAwesomeIcon
                icon={faGear}
                className="gear"
                onClick={() => toggleSettings(index)}
              />
            ) : (
              <div></div>
            )}
            {blog.editMode === true ? (
              <input
                placeholder={blog.tit}
                className="editTit"
                type="text"
                onChange={(e) => {
                  setUpdatedTitle(e.target.value);
                  licznikFn(index, "tit", e);
                }}
              />
            ) : (
              <h3 className="title">{blog.tit}</h3>
            )}
            {blog.settingsMode &&
            isAuth &&
            auth.currentUser?.uid.toString() === blog.id.toString() ? (
              <div className="others">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="emojis"
                  id="ed"
                  onClick={() => {
                    toggleEdit(index);
                    blog.licznikTit = 0;
                    blog.licznikDes = 0;
                    blog.cnTit = "licznik";
                    blog.cnDes = "licznik";
                  }}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="emojis"
                  id="tr"
                  onClick={() => handleDelete(blog.BlogId)}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {blog.editMode ? (
            <h3 className={blog.cnTit}>{`${blog.licznikTit} / 25`}</h3>
          ) : (
            <div className="nothing"></div>
          )}
          {blog.editMode ? (
            <textarea
              placeholder={blog.des}
              className="editDes"
              onChange={(e) => {
                setUpdatedDescription(e.target.value);
                blog.licznikDes = e.target.value.length;
              }}
            />
          ) : (
            <p className="description">{blog.des}</p>
          )}
          {blog.editMode ? (
            <h3 className={blog.cnDes}>{`${blog.licznikDes} / 500`}</h3>
          ) : (
            <div className="nothing"></div>
          )}
          {blog.editMode ? (
            <button className="confirm" onClick={() => editSubmit(index)}>
              Confirm
            </button>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blogs;
