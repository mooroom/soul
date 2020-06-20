import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { useFirestore, useAuth } from "reactfire";
import logo from "./img/logo.svg";

const SignUp = ({ history }) => {
  const auth = useAuth();
  const firestore = useFirestore();

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, name } = event.target.elements;
      try {
        await auth.createUserWithEmailAndPassword(email.value, password.value);
        auth.onAuthStateChanged((user) => {
          firestore
            .collection("user")
            .doc(`${user.uid}`)
            .set({
              uid: `${user.uid}`,
              uName: `${name.value}`,
              uEmail: `${email.value}`,
            });
        });
        history.push("/start");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="container">
      <div id="logoBox">
        <img src={logo} width="50px" />
      </div>
      <div id="loginBox">
        <div className="f-20 f-b mb-5">회원가입</div>
        <form onSubmit={handleSignUp}>
          <div>
            <input name="email" type="email" placeholder="Email" />
          </div>
          <div>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div>
            <input name="name" type="name" placeholder="Nickname" />
          </div>

          <button className="soul-btn mt-1 mb-5" type="submit">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
