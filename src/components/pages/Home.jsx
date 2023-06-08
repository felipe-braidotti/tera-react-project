import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Loading from "../atoms/Loading";

export default function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Acionado após a rederização da DOM (após o 'return' deste componente funcional)
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      });
  }, []);

  console.log(users);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select
        onChange={(event) => setCurrentUser(event.target.value)}
        className="home__select-users"
      >
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn)) // organiza a lista em ordem alfabética
          .map(
            (user) => (
              <option value={user.id}>
                {user.fn} {user.ln}
              </option>
            ) // itera a busca do 'fn' e 'ln' em todo 'user' de 'users' através do MAP. Joga na lista do 'select' as opções recolhidas da API
          )}
      </select>
      {!!currentUser && (
        <button
          onClick={() => navigate(`/users/${currentUser}`)}
          className="button-primary"
        >
          Entrar
        </button>
      )}
    </div>
  );
}
