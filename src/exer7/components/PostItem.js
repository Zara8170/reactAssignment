import React from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../reduxComponents/postSlice";
import { useDispatch } from "react-redux";

export default function PostItem({ id, title }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={`/detail-post/${id}`}>
        <span>{title}</span>&nbsp;
      </Link>
      <button onClick={() => dispatch(deletePost(id))}>Delete</button>&nbsp;
      <Link to={`/edit-post/${id}`}>Edit</Link>
    </div>
  );
}
