import React, {useEffect} from "react";
import BlogContent from "./BlogContent";
import BlogList from "./BlogList";

const BlogPage = () => {
  return (
      <div>
        <h1>Blog Page</h1>
        <BlogContent/>
        <BlogList/>
      </div>
  );
};

export default BlogPage;