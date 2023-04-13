import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./blogs-service"

export const findBlogsThunk = createAsyncThunk(
    'blogs/findBlogs', async () => await service.findBlogs()
)

export const deleteBlogThunk = createAsyncThunk(
    'blogs/deleteBlog',
    async (blogId) => {
      await service.deleteBlog(blogId)
      return blogId
    })

export const createBlogThunk = createAsyncThunk(
    'blogs/createBlog',
    async (blog) => {
      const newBlog = await service.createBlog(blog)
      return newBlog
    })

export const updateBlogThunk = createAsyncThunk(
    'blogs/updateBlog',
    async (blog) => await service.updateBlog(blog)
)
