import React from "react";
import LeftAuth from "../components/LeftAuth";
import RightAuth from "../components/RightAuth";

const Auth = () => {
  return (
    <div className="min-h-screen flex">
      <LeftAuth />
      <RightAuth />
    </div>
  );
};

export default Auth;
