import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import { store } from "./data/redux/store";
import axiosConfigure from "./config/axiosConfig";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

axiosConfigure();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
