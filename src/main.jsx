import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/slices/Index.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            style: {
              background: "#10b981",
            },
          },
          error: {
            duration: 3000,
            style: {
              background: "#ef4444",
            },
          },
        }}
      />
    </Provider>
  </React.StrictMode>,
);
