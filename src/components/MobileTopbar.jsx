import React, { useState } from "react";
import { HiMenu, HiX, HiOutlineHome } from "react-icons/hi";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import { IoCloudOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";

const MobileTopbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("UtkarshDhairyaPanwar");

  const menuItems = [
    {
      id: 1,
      title: "Repositories",
      icon: <HiOutlineHome className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 2,
      title: "AI Code Review",
      icon: <VscCode className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 3,
      title: "Cloud Security",
      icon: <IoCloudOutline className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 4,
      title: "How to Use",
      icon: <FaBook className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 5,
      title: "Settings",
      icon: <IoSettingsOutline className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 6,
      title: "Support",
      icon: <IoCallOutline className="h-5 w-5 text-gray-600" />,
    },
    {
      id: 7,
      title: "Logout",
      icon: <FiLogOut className="h-5 w-5 text-gray-600" />,
    },
  ];

  return (
    <>
      <div className="sticky top-0 bg-white border-b border-gray-200 lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="CodeAnt AI" className="h-8 w-8" />
            <span className="font-semibold text-lg">CodeAnt AI</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-1 hover:bg-gray-100 rounded-md"
          >
            <HiMenu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="CodeAnt AI" className="h-8 w-8" />
                <span className="font-semibold text-lg">CodeAnt AI</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-md"
              >
                <HiX className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="p-4">
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="UtkarshDhairyaPanwar">
                  UtkarshDhairyaPanwar
                </option>
              </select>

              <nav className="space-y-4 mb-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 rounded-md"
                  >
                    {item.icon}
                    <span className="text-gray-700">{item.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileTopbar;
