import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import Routes from "../components/Routes";
import "../../assets/stylesheets/application.tailwind.css";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Routes>
      <App />
    </Routes>,
    document.body.appendChild(document.createElement("div"))
  );
});
