import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      { id: 1, title: "First Post", content: "집에가고싶다" },
      { id: 2, title: "Second Post", content: "자고싶다" },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push({
        id: state.posts.length + 1,
        title: action.payload.title,
        content: action.payload.content,
      });
    },
    editPost: (state, action) => {
      state.posts = state.posts.map((p) =>
        p.id === action.payload.id
          ? {
              ...p,
              title: action.payload.title,
              content: action.payload.content,
            }
          : p
      );
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
