import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaBitbucket, FaGitlab } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { VscAzureDevops } from "react-icons/vsc";
import { Link } from "react-router-dom";

const RightAuth = () => {
  const [activeTab, setActiveTab] = useState("saas");

  const renderAuthButtons = () => {
    if (activeTab === "saas") {
      return (
        <>
          <Link
            to="/dashboard"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-semibold"
          >
            <BsGithub className="text-lg lg:text-xl text-black" />
            <span>Sign in with Github</span>
          </Link>

          <Link
            to="/dashboard"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-semibold"
          >
            <FaBitbucket className="text-lg lg:text-xl text-blue-500" />
            <span>Sign in with Bitbucket</span>
          </Link>

          <Link
            to="/dashboard"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-semibold"
          >
            <VscAzureDevops className="text-lg lg:text-xl text-blue-600" />
            <span>Sign in with Azure Devops</span>
          </Link>

          <Link
            to="/dashboard"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-semibold"
          >
            <FaGitlab className="text-lg lg:text-xl text-orange-600" />
            <span>Sign in with GitLab</span>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link
            to="/dashboard"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-semibold"
          >
            <FaGitlab className="text-xl text-orange-600" />
            <span>Self Hosted GitLab</span>
          </Link>

          <Link
            to="/dashboard"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-semibold"
          >
            <IoKeyOutline className="text-xl text-black" />
            <span>Sign in with SSO</span>
          </Link>
        </>
      );
    }
  };

  return (
    <div className="flex w-full mx-2 lg:mx-0 lg:w-1/2 items-center justify-center h-screen bg-gray-100">
      <div className="w-[90%] bg-white border-gray-200 border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl flex flex-col items-center justify-center py-16 px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/logo2.png"
              alt="CodeAnt AI Logo"
              className="h-6 lg:h-8"
            />
          </div>
          <h2 className="text-xl lg:text-3xl font-bold">
            Welcome to CodeAnt AI
          </h2>
        </div>

        <div className="mt-8 space-y-4 w-full max-w-md">
          <div className="flex rounded-lg bg-gray-200 p-1">
            <button
              className={`flex-1 py-2 px-4 rounded-md transition-colors font-semibold ${
                activeTab === "saas"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab("saas")}
            >
              SAAS
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-md transition-colors font-semibold ${
                activeTab === "selfHosted"
                  ? "bg-primary text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveTab("selfHosted")}
            >
              Self Hosted
            </button>
          </div>

          <div className="space-y-3">{renderAuthButtons()}</div>
        </div>

        <div className="text-center text-xs lg:text-sm text-gray-600 mt-8">
          By signing up you agree to the{" "}
          <a href="#" className="text-gray-900 font-medium">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default RightAuth;
