import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use `react-dom/client` in React 18+
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct React 18 Syntax
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
