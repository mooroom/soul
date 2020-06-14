import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { useFirestore, useAuth } from "reactfire";

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
        history.push("/welcome");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <label>
          name
          <input name="name" type="name" placeholder="Name" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
