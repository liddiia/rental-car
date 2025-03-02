import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "modern-normalize";
import "@fontsource/manrope";
import "./index.css";

import App from "./App.jsx";
import { Provider } from "react-redux";

import { store, persistor} from "./redux/store.js";
 import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
          <App />
    </PersistGate> 
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
