import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./components/context/AuthProvider";
import SnackbarProvider from "./components/context/SnackbarProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </AuthProvider>
);
