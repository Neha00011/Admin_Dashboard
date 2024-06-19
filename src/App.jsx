import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen">
        <Navbar />
        <div className="flex-1 p-0">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
