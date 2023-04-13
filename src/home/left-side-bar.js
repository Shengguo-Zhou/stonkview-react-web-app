import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "./NavigationSideBar.css";
const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[1];
  return (
  <div className="list-group">
    <Link to="/" className={`list-group-item ${active === ''?'active':''}`}>
      <i className="bi bi-house-door"></i> Home
    </Link>
    <Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>
      <i className="bi bi-search"></i> Search
    </Link>
    <Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
      <i className="bi bi-person"></i> Profile
    </Link>
    <Link to="/blogs" className={`list-group-item ${active === 'blogs'?'active':''}`}>
      <i className="bi bi-bookmark-star"/> Blog
    </Link>
  </div>
  );


};
export default NavigationSidebar;

