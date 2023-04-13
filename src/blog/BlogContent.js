import React, {useState} from "react";
import {createBlogThunk} from "../services/blogs-thunks";
import {useDispatch} from "react-redux";

const BlogContent = () => {
  let [newContent, setNewContent] = useState('');
  const dispatch = useDispatch();
  const blogClickHandler = () => {
    const newBlog = { blog: newContent }
    dispatch(createBlogThunk(newBlog));
  }
  return (
      <div className="row">
        <div className="col-auto">
          <img src={"../home/logo.webp"} width={60}/>
        </div>
        <div className="col-10">
       <textarea value={newContent} placeholder="Wants to share somthing...?"
                 className="form-control border-0"
                 onChange={(event) => setNewContent(event.target.value)}>
       </textarea>
          <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={blogClickHandler}>Blog</button>
            <div className="text-primary fs-2">
              <i className={"bi bi-card-image me-3"}/>
              <i className={"bi bi-filetype-gif me-3"}/>
              <i className={"bi bi-bar-chart me-3"}/>
              <i className={"bi bi-emoji-smile me-3"}/>
              <i className={"bi bi-geo-alt"}/>
            </div>
          </div>
        </div>
        <div className="col-12"><hr/></div>
      </div>
  );

};

export default BlogContent;