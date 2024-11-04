import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AuthProtectedRoute from "./components/protected/AuthProtectedRoute";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./components/Errors/Not-Found";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthProvider";
import SnackbarCustom from "./components/Errors/SnackbarCustom";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  function AuthStatusElement(): JSX.Element {
    return isAuthenticated ? (
      <h1 className="text-info">user is logged in</h1>
    ) : (
      <h1 className="text-warning">user isn't logged in!</h1>
    );
  }

  return (
    <>
      {AuthStatusElement()}

      <BrowserRouter>
        <Navbar />

        <hr />

        <Routes>
          <Route path="/" element={<AuthProtectedRoute element={<Home />} />} />
          <Route
            path="/about"
            element={<AuthProtectedRoute element={<About />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <SnackbarCustom />
    </>
  );
}

export default App;
