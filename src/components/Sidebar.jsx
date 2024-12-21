import React from "react";
import { FaBook } from "react-icons/fa";
import { FiCloud, FiLogOut, FiSettings } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { VscCode } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col w-72 bg-white border-r">
      <div className="px-6 py-4 border-b">
        <div className="flex items-center space-x-2">
          <img src="/logo2.png" alt="logo" />
        </div>
      </div>

      <div className="p-4">
        <div className="p-2 bg-white border rounded-lg">
          <select className="w-full bg-transparent outline-none">
            <option>UtkarshDhairiyaPatel</option>
          </select>
        </div>
      </div>

      <nav className="py-2 px-4 space-y-1 font-medium">
        <div className="flex items-center space-x-2 bg-primary text-white p-2 rounded-lg">
          <HiOutlineHome size={20} />
          <span>Repositories</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg">
          <VscCode size={20} />
          <span>AI Code Review</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg">
          <FiCloud size={20} />
          <span>Cloud Security</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg">
          <FaBook size={20} />
          <span>How to Use</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg">
          <FiSettings size={20} />
          <span>Settings</span>
        </div>
      </nav>

      <div className="absolute bottom-0 w-72 border-t font-medium">
        <div className="p-4">
          <div className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg">
            <IoCallOutline size={20} />
            <span>Support</span>
          </div>
          <Link to="/">
            <div className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg">
              <FiLogOut size={20} />
              <span>Logout</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
