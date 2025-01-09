import { StrictMode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        {/* Wrap SpeedInsights around specific parts of your app */}
        <SpeedInsights>
          <App />
        </SpeedInsights>
      </RouterProvider>
    </Provider>
  </StrictMode>
);
