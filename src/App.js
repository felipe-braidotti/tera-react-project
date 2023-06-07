import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import UserPostForm from "./components/pages/UserPostForm";

import "./styles/normalize.css";
import "./styles/fontawesom.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserBlog />} />
        <Route path="/users/:userId/post" element={<UserPostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
