import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost } from "../reduxComponents/postSlice";

export default function EditPost() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post = useSelector((state) =>
    state.post.posts.find((p) => p.id === parseInt(id))
  );

  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  useEffect(() => {
    if (post) {
      setInputTitle(post.title);
      setInputContent(post.content);
    }
  }, []);

  const onClickSave = () => {
    dispatch(
      editPost({
        id: parseInt(id),
        title: inputTitle,
        content: inputContent,
      })
    );
    navigate("/post");
  };

  if (!post) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>Edit Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <br />
      <br />
      <textarea
        placeholder="Content"
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
      />
      <br />
      <br />
      <button onClick={onClickSave}>Save</button>
    </div>
  );
}
