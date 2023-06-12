/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";

import Default from "../templates/Default";

import user1 from "../../images/placeholders/user-1.svg";
import user2 from "../../images/placeholders/user-2.svg";
import user3 from "../../images/placeholders/user-3.svg";

export default function Users() {
  return (
    <Default>
      <div className="users">
        <h1>Users</h1>

        <div className="users__list">
          <a href="#" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={user1} class="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">John Walter</div>
          </a>
          <a href="#" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={user2} class="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">Chris Hudson</div>
          </a>
          <a href="#" clasNames="users__list-item">
            <div className="users__list-item-photo">
              <img src={user3} class="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">Bryan Cornell</div>
          </a>
        </div>
      </div>
    </Default>
  );
}
