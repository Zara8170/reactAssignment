import React from "react";
import { useSelector } from "react-redux";
import DetailItem from "../components/DetailItem";
import { useParams } from "react-router-dom";

export default function DetailPost() {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.post.posts.find((p) => p.id === parseInt(id))
  );
  return (
    <div>
      <DetailItem key={post.id} {...post} />
    </div>
  );
}
