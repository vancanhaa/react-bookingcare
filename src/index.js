import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./components/global-styles/GlobalStyles";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import { Provider } from "react-redux";
import { rootStore } from "./store";
import ScrollToTop from "./components/ScrollToTop";
import IntlProviderWrapper from "./hoc/IntlProviderWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <BrowserRouter>
        <IntlProviderWrapper>
          <GlobalStyles>
            <App />
          </GlobalStyles>
          <ScrollToTop />
        </IntlProviderWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
