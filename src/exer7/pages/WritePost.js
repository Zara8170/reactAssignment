import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../reduxComponents/postSlice";

export default function WritePost() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onClickSave = () => {
    dispatch(addPost({ title: inputTitle, content: inputContent }));
    nav("/post");
  };
  return (
    <div>
      <h1>Write a New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name=""
        placeholder="Content"
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
      />
      <br />
      <br />
      <button onClick={onClickSave}>save</button>
    </div>
  );
}
