import React from "react";
import logo from "../../images/logo.svg";

export default function UserPostForm() {
  return (
    <div class="wrapper">
      <div class="app-header">
        <div class="app-header__logo">
          <img src={logo} class="responsive" alt="" />
        </div>
        <div class="app-header__menu">
          <i class="fa fa-bars"></i>
        </div>
      </div>

      <div className="create-post">
        <h1>Criar</h1>

        <form className="create-post__form">
          <div className="create-post__form-name">
            <label for="name">Título</label>
            <input type="text" id="name" name="title" />
          </div>
          <div className="create-post__form-content">
            <label for="content">Conteúdo</label>
            <textarea name="content" id="content"></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>

      <div className="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  );
}
