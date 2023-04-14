import { createSlice } from "@reduxjs/toolkit";
import {deleteBlogThunk, findBlogsThunk, createBlogThunk, updateBlogThunk} from "./blogs-thunks";


const blogsReducer = createSlice({
  name: 'blogs',
  initialState: {
    loading: false,
    blogs: [],
    error: null,
  },
  reducers: {},

  extraReducers: {
    [findBlogsThunk.pending]:
        (state) => {
          state.loading = true
          state.blogs = []
        },
    [findBlogsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.blogs = payload
        },
    [findBlogsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteBlogThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.blogs = state.blogs.filter(t => t._id !== payload)
        },
    [createBlogThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.blogs.push(payload)
        },
    [updateBlogThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const blogNdx = state.blogs.findIndex((t) => t._id === payload._id)
          state.blogs[blogNdx] = {
            ...state.blogs[blogNdx],
            ...payload
          }
        }
  },

})



export default blogsReducer.reducer;