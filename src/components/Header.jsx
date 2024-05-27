import React from "react";
// import Desktopimage from "../assest/image-hero-desktop.webp";
// import Herotablet from "../assest/image-hero-tablet.webp";
// import Heromobile from "../assest/image-hero-mobile.webp";

const Header = () => {
  return (
    <>
      <div
        className="container flex flex-col
  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0  md:flex-row overflow-hidden"
      >
        {/* Left Side */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1
            className="max-w-md text-4xl font-bold 
           md:text-5xl text-left"
          >
            Maximize skill, minimize budget
          </h1>
          <p className="max-w-sm  text-gray-500 text-left text-[18px]  lg:text-[15px] md:text-[14px]">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>

          <a
            href="#Get Started"
            className="  p-3 px-6 pt-2 text-white  bg-gradient-to-tr from-[#FF6F48]  to-[#F02AA6] 
            rounded-full self-baseline hover:bg-gray-500 "
          >
            Get Started
          </a>
        </div>
      </div>
      {/* <div>
        <div class="hidden md:block lg:block  md:ml-[45rem] md:mt-[-42rem] w-[700px] lg:ml-[63rem] lg:mt-[-40rem]">
          <img src={Desktopimage} alt="" />
        </div>
         <div class="hidden sm:block md:hidden lg:hidden">
          <img src={Herotablet} alt="" />
        </div>
        <div class="block sm:hidden mt-[2rem]">
          <img src={Heromobile} alt="" />
        </div> 
      </div> */}
    </>
  );
};

export default Header;
