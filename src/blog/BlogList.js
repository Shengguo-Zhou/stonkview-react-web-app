import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findBlogsThunk} from "../services/blogs-thunks";

const BlogList = () => {
  const {blogs, loading} = useSelector(state => state.blogs)
  const dispatch = useDispatch();
  useEffect(() => { dispatch(findBlogsThunk())}, [])

  return(
      <>
        <ul className={"list-group"}>
          {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
          {
            blogs.map(blog => {
              return(
                  <li className={"list-group-item"}>
                    {blog.content}
                  </li>
              );
            })
          }
        </ul>
      </>
  );

};

export default BlogList;