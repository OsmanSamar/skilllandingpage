import React from "react";
import { ReactComponent as Logo } from "../assest/logo-light.svg";

const Footer = () => {
  return (
    <div className=" bg-[#001f3f] p-8 ">
      <div className="flex items-center justify-between ">
        <div className="pt-2">
          {/* The ReactComponent import syntax is a special syntax used by Create
          React App for importing SVG files as React components. */}
          <Logo alt="Logo Icon" />
        </div>

        {/* Button */}
        <a
          href="#Get Started"
          className="  p-3 px-4 pt-2 text-white  bg-gradient-to-tr from-[#e534c5]  to-[#6c0b75] transition-all
            rounded-full self-baseline "
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Footer;
