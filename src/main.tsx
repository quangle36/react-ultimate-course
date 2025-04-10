// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import "./styles/DatFromInfo.css";
import "./styles/button.css";
import "./styles/index.css";
import App from "./App.tsx";
import { AppProvider } from "./contexts/AppContext.tsx";

// createRoot(document.getElementById('root')!).render(
//   // <StrictMode>
//   <AppProvider>
//     <App />
//   </AppProvider>
//   // </StrictMode>,
// )
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
