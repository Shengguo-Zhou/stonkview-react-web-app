import React, {useEffect} from "react";
import BlogContent from "./BlogContent";
import BlogList from "./BlogList";
import {useSelector} from "react-redux";

const BlogPage = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
      <div>
        <h1 className={"text-center mt-2"}>You Can Find Everything Inside This Blog</h1>
        {currentUser && <BlogContent/>}
        {currentUser && <BlogList/>}
        {!currentUser && <>
          <h1>Please log in to show the blog</h1>
        </>
        }
      </div>
  );
};

export default BlogPage;