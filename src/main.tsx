import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./presentation/components/ui/provider.tsx";
import { system } from "./presentation/theme";
import "@fontsource-variable/playfair-display/index.css"
import '@fontsource/poppins/index.css';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider value={system}>
      <App />
    </Provider>
  </StrictMode>
);
