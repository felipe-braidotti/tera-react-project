import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom;";

import Default from "../templates/Default";

import user1 from "../../images/placeholders/user-1.svg";
import post1 from "../../images/placeholders/post-1.svg";
import post2 from "../../images/placeholders/post-2.svg";
import post3 from "../../images/placeholders/post-3.svg";

export default function UserBlog() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}`
        ).then((response) => response.json()),
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`
        ).then((response) => response.json()),
      ]);

      setUser(userResponse);
      setPosts(postsResponse);
    };
    getApiData();
  }, [userId]);

  console.log("user: ", user);
  console.log("posts: ", posts);

  return (
    <Default>
      <div className="user-blog">
        <div className="user-blog__header">
          <div className="user-blog__header-photo">
            <img src={user1} class="responsive avatar" alt="" />
          </div>
          <h1 className="user-blog__header-title">Chris Hudson</h1>
          <p className="user-blog__header-bio">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="user-blog__posts">
          <div className="user-blog__posts-item">
            <div className="user-blog__posts-item-photo">
              <img src={post1} class="responsive" alt="" />
            </div>
            <h2 className="user-blog__posts-item-title">
              Usando React como SPA
            </h2>
            <div className="user-blog__posts-date">Publicado em 14/06/2022</div>
          </div>
          <div clasNames="user-blog__posts-item">
            <div class="user-blog__posts-item-photo">
              <img src={post2} class="responsive" alt="" />
            </div>
            <h2 className="user-blog__posts-item-title">Você conhece o JSX?</h2>
            <div className="user-blog__posts-date">Publicado em 14/06/2022</div>
            <div className="user-blog__post-content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
          </div>
          <div className="user-blog__posts-item">
            <div className="user-blog__posts-item-photo">
              <img src={post3} class="responsive" alt="" />
            </div>
            <h2 class="user-blog__posts-item-title">
              SSG, SPA e SSR: Qual usar?
            </h2>
            <div className="user-blog__posts-date">Publicado em 14/06/2022</div>
          </div>
        </div>
      </div>
    </Default>
  );
}
