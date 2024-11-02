import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const getButtonClass = (path: string) =>
    location.pathname === path ? "btn btn-primary active" : "btn btn-primary";
  return (
    <nav className="d-flex gap-3">
      <button className={getButtonClass("/")}>
        <Link className="text-decoration-none text-white" to="/">
          Home
        </Link>
      </button>
      <button className={getButtonClass("/about")}>
        <Link className="text-decoration-none text-white" to="/about">
          About
        </Link>
      </button>
      <button className={getButtonClass("/login")}>
        <Link className="text-decoration-none text-white" to="/login">
          Login page
        </Link>
      </button>
    </nav>
  );
}

export default Navbar;
