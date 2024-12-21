import React, { useState } from "react";
import { FiRefreshCw, FiPlus } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import Sidebar from "../components/Sidebar";
import MobileTopbar from "../components/MobileTopbar";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [repositories, setRepositories] = useState([
    {
      name: "design-system",
      visibility: "Public",
      language: "React",
      size: "7320 KB",
      updatedAt: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      language: "Javascript",
      size: "5871 KB",
      updatedAt: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      language: "Python",
      size: "4521 KB",
      updatedAt: "5 days ago",
    },
    {
      name: "mobile-app",
      visibility: "Public",
      language: "Swift",
      size: "3096 KB",
      updatedAt: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      visibility: "Private",
      language: "Java",
      size: "6210 KB",
      updatedAt: "6 days ago",
    },
    {
      name: "blog-website",
      visibility: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updatedAt: "4 days ago",
    },
    {
      name: "social-network",
      visibility: "Private",
      language: "PHP",
      size: "5432 KB",
      updatedAt: "7 days ago",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRepo, setNewRepo] = useState({
    name: "",
    visibility: "Public",
    language: "",
    size: "",
    updatedAt: "just now",
  });

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddRepository = () => {
    setRepositories([...repositories, newRepo]);
    setNewRepo({
      name: "",
      visibility: "Public",
      language: "",
      size: "",
      updatedAt: "just now",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      <Sidebar />
      <MobileTopbar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Repositories
              </h1>
              <p className="text-gray-600">
                {repositories.length} total repositories
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1 px-3 py-1.5 text-gray-700 rounded-lg border hover:bg-gray-50 shadow-md">
                <FiRefreshCw size={16} />
                <span>Refresh All</span>
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-1 px-3 py-1.5 text-white bg-primary rounded-lg hover:bg-blue-500 shadow-md"
              >
                <FiPlus size={16} />
                <span>Add Repository</span>
              </button>
            </div>
          </div>

          <div className="mb-6 relative">
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full p-2 pl-10 border rounded-lg outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
              <IoSearch size={22} />
            </div>
          </div>

          <div className="space-y-4">
            {filteredRepositories.map((repo) => (
              <div
                key={repo.name}
                className="p-4 border rounded-lg hover:bg-gray-100 transition ease-in-out delay-150 hover:scale-95 duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">
                        {repo.name}
                      </h3>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          repo.visibility === "Public"
                            ? "bg-blue-100 text-primary"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {repo.visibility}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <span>{repo.language}</span>
                        <div className={`w-2 h-2 rounded-full bg-primary`} />
                      </div>
                      <span>{repo.size}</span>
                      <span>Updated {repo.updatedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 mx-6 lg:mx-0">
            <h2 className="text-lg lg:text-xl font-semibold mb-4">
              Add New Repository
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Repository Name"
                className="w-full p-2 border rounded-lg outline-none text-sm lg:text-lg"
                value={newRepo.name}
                onChange={(e) =>
                  setNewRepo({ ...newRepo, name: e.target.value })
                }
              />
              <select
                className="w-full p-2 border rounded-lg outline-none text-sm lg:text-lg"
                value={newRepo.visibility}
                onChange={(e) =>
                  setNewRepo({ ...newRepo, visibility: e.target.value })
                }
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              <input
                type="text"
                placeholder="Language"
                className="w-full p-2 border rounded-lg outline-none text-sm lg:text-lg"
                value={newRepo.language}
                onChange={(e) =>
                  setNewRepo({ ...newRepo, language: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Size (e.g., 1234 KB)"
                className="w-full p-2 border rounded-lg outline-none text-sm lg:text-lg"
                value={newRepo.size}
                onChange={(e) =>
                  setNewRepo({ ...newRepo, size: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end space-x-2 mt-4 w-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 w-1/2 text-white font-medium text-sm lg:text-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddRepository}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 w-1/2 font-medium text-sm lg:text-lg"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
