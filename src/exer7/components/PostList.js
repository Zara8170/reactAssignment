import React from "react";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";

export default function PostList() {
  const posts = useSelector((state) => state.post.posts);
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostItem key={post.id} {...post} />
          </li>
        ))}
      </ul>
    </>
  );
}
