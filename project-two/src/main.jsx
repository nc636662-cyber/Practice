import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import SearchProvider from "./SearchContext.jsx";
import CartProvider from "./components/CartContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <SearchProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </SearchProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);