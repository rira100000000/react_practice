import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Todo from "./components/Todo";
import { LoginProvider } from "./hooks/useLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <Todo />
    </LoginProvider>
  </React.StrictMode>
);
