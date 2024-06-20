import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import Tables from "./Pages/Tables.jsx";
import Charts from "./Pages/Charts.jsx";
import CalendarPage from "./Pages/Calendar.jsx";
import Kanban from "./Pages/Kanban.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/kanban" element={<Kanban />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
