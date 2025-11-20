import { RouteObject } from "react-router-dom";
import Login from "./login/Login";
import Home from "./routes/home";

// Rotas principais do app
const routes: RouteObject[] = [
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
];

export default routes;
