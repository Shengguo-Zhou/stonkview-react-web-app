import axios from 'axios';

const BLOGS_API = 'http://localhost:4000/blogs';
// const TUITS_API = 'https://tuiter-node-server-app-0402.onrender.com/api/tuits';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;

export const findBlogs = async () => {
  const response = await axios.get(BLOGS_API) ;
  const blogs = response.data;
  return blogs;
}

export const deleteBlog = async (bid) => {
  const response = await axios.delete(`${BLOGS_API}/${bid}`)
  return response.data
}

export const createBlog = async (blog) => {
  const response = await axios.post(BLOGS_API, blog)
  return response.data;
}

export const updateBlog = async (blog) => {
  const response = await axios.put(`${BLOGS_API}/${blog._id}`, blog);
  return blog;
}