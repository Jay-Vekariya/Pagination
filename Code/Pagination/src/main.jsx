import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GlobalState from "./Components/GlobalState.jsx";
import TableData from "./Components/TableData.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalState>
      <TableData />
    </GlobalState>
  </StrictMode>
);
