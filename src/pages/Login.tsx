import { useContext } from "react";
import { AuthContext } from "../components/context/AuthProvider";

function Login() {
  const { isAuthenticated, setAuth } = useContext(AuthContext);
  const ElementBtn = () => {
    return isAuthenticated ? (
      <button className="btn btn-danger" onClick={logOut}>
        log out
      </button>
    ) : (
      <button className="btn btn-secondary" onClick={logIn}>
        log in
      </button>
    );
  };

  function logIn() {
    setAuth(true);
  }
  function logOut() {
    setAuth(false);
  }

  return (
    <>
      <p>Login page</p>
      <ElementBtn />
    </>
  );
}

export default Login;
