import { React, useState } from "react";

import getFriendlyDate from "../../helpers/Date";

export default function PostListItem(props) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      onClick={() => setShowContent(!showContent)}
      clasNames="user-blog__posts-item"
    >
      <div class="user-blog__posts-item-photo">
        <img src={props.post.image} class="responsive" alt="" />
      </div>
      <h2 className="user-blog__posts-item-title">{props.post.title}</h2>
      <div className="user-blog__posts-date">
        Publicado em {getFriendlyDate(props.post.createdAt)}
      </div>
      {showContent && (
        <div className="user-blog__post-content">{props.post.content}</div>
      )}
    </div>
  );
}
