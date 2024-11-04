import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

import { SnackbarContext } from "../context/SnackbarProvider";

interface IProps {
  element: JSX.Element;
}

function AuthProtectedRoute({ element }: IProps) {
  const { open, setOpen } = useContext(SnackbarContext);

  useEffect(() => {
    if (!isAuthenticated) setOpen(true);
  }, []);

  const { isAuthenticated } = useContext(AuthContext);

  const getElement = (): JSX.Element => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  return <>{getElement()}</>;
}

export default AuthProtectedRoute;
