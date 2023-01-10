import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Provider as FavoriteProvider } from "./context/favorite";

import App from "./components/app";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <CSSReset />
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
