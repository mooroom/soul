import React, { useEffect, useState } from "react";
import { useAuth } from "reactfire";
import Spinner from "react-bootstrap/Spinner";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuth();
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div className="spinnerBox">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
