import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./redux/store";

import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@mui/material";
// import { theme } from "./theme";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CssBaseline />
    {/* <ThemeProvider theme={theme}> */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </>
);
