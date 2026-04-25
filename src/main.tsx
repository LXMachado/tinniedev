import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { HelmetProvider } from "react-helmet-async";

const root = createRoot(document.getElementById("root")!);
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
  