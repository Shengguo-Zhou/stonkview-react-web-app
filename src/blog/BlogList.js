import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findBlogsThunk} from "../services/blogs-thunks";

const BlogList = () => {
  const {blogs, loading} = useSelector(state => state.blogs)
  const dispatch = useDispatch();
  // const blogArray = Object.values(blogs);
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
              blogs && blogs.map((blog, index) => {
                return (
                    <li key={index} className={"list-group-item"}>
                      {blog.blogUsername}: {blog.content}
                    </li>
                );
              })
          }
        </ul>
      </>
  );

};

export default BlogList;