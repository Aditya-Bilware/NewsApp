import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { NewsContextProvider } from "./contexts/NewsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  </BrowserRouter>,
);
