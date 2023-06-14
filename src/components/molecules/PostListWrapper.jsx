import React from "react";

import PostListItem from "../molecules/PostListItem";

export default function PostListWrapper(props) {
  return (
    <div className="user-blog__posts">
      {props.posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
}
