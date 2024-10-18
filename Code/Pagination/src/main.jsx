import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Components/Home.jsx";
import Pagination from "./Components/Pagination.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home>
      <Pagination />
    </Home>
  </StrictMode>
);
