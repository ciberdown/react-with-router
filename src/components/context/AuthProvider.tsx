import { createContext, useState } from "react";

export interface IAuthContext {
  isAuthenticated: boolean;
  setAuth: Function;
}

export const AuthContext = createContext<IAuthContext>(null!);
export interface IProps {
  children: JSX.Element;
}

function AuthProvider({ children }: IProps) {
  const [isAuthenticated, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
