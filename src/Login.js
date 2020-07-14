import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./Auth.js";
import { useAuth } from "reactfire";
import { Link } from "react-router-dom";
import logo from "./img/logo.svg";

const Login = ({ history }) => {
  const auth = useAuth();
  const user = auth.currentUser;

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        console.log(auth.currentUser.uid);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div id="logoBox">
        <img src={logo} width="50px" />
      </div>
      <div id="loginBox">
        <div className="f-20 f-b mb-5">로그인</div>
        <form onSubmit={handleLogin} autoComplete="off">
          <div>
            <input
              id="emailForm"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="false"
              required
            />
          </div>
          <div>
            <input
              id="passwordForm"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <div>
            <button className="soul-btn mt-3 mb-5" type="submit">
              로그인
            </button>
          </div>
        </form>
        <Link to="/signup">
          <button className="btn">회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Login);
