import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import "../LoginPage/style.css";
import LoginIcon from "@mui/icons-material/Login";
import BookIcon from "@mui/icons-material/Book";

export function LoginPage() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    login(email, password);
  };

  return (
    <>
      <div className="login">
        <div className="logo">
          <BookIcon className="Book-icon" />
          <h1> RepoSystem</h1>
        </div>

        <div className="form">
          <h1 className="title">Login</h1>
          <div className="field">
            <label htmlFor="email"></label>
            <input
              placeholder="email@gmail.com"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="password"></label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="actions">
            <button className="button-login" onClick={handleLogin}>
              entrar <LoginIcon className="login-icon" />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
