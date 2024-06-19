import React from "react";
import {
  FaTachometerAlt,
  FaTable,
  FaChartPie,
  FaCalendarAlt,
  FaTasks,
  FaCog,
  FaUser,
} from "react-icons/fa";
import { SheetDemo } from "../ThemeChanger/ThemeChanger";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <FaUser className="text-4xl" />
        <span className="ml-3 text-xl">User</span>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/" className="flex items-center">
              <FaTachometerAlt className="mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/tables" className="flex items-center">
              <FaTable className="mr-3" />
              Tables
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/charts" className="flex items-center">
              <FaChartPie className="mr-3" />
              Charts
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/calendar" className="flex items-center">
              <FaCalendarAlt className="mr-3" />
              Calendar
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/kanban" className="flex items-center">
              <FaTasks className="mr-3" />
              Kanban
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <SheetDemo />
      </div>
    </div>
  );
};

export default Navbar;
