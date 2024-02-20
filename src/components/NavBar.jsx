import React from "react";
import { ReactComponent as Logo } from "../assest/logo-dark.svg";

const NavBar = () => {
  return (
    <div className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          {/* The ReactComponent import syntax is a special syntax used by Create
          React App for importing SVG files as React components. */}
          <Logo alt="Logo Icon" />
        </div>

        {/* Button */}
        <a
          href="#Get Started"
          className="  p-3 px-6 mr-8 pt-2 text-white bg-[#001f3f] 
            rounded-full self-baseline hover:bg-gray-500 md:block"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
