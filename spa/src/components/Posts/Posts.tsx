import React from "react";
import "./posts.scss";

interface PostsProps {
  name: string;
  id: number;
  body: string;
}

function Posts(props: PostsProps) {
  return (
    <div className="post__container">
      <div className="post__id">{props.id}</div>
      <div className="post__title">{props.name}</div>
      <div className="post__description">{props.body}</div>
    </div>
  );
}

export default Posts;
