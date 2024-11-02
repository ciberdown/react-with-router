import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import Popup from "../popups/Popup";

interface IProps {
  element: JSX.Element;
}

function AuthProtectedRoute({ element }: IProps) {
  const { isAuthenticated } = useContext(AuthContext);

  const getElement = (): JSX.Element => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  return <>{getElement()}</>;
}

export default AuthProtectedRoute;
