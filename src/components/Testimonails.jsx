import React from "react";
import AnimationIcon from "../assest/icon-animation.svg";
import BusinessIcon from "../assest/icon-business.svg";
import IconCrypto from "../assest/icon-crypto.svg";
import DesignIcon from "../assest/icon-design.svg";
import PhotograpIcon from "../assest/icon-photography.svg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Testimonails = () => {
  return (
    <div className="max-w-6xl px-5 mx-auto md:mt-10 mb-16  mt-60">
      {/* Testimonials Container */}

      <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-x-2.5 lg:grid-cols-3 lg:gap-x-8">
        {/*1 */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000" //animation duration for a smoother or faster effect
          data-aos-easing="ease-in-out" //Change the easing function for different animation effects.
          data-aos-delay="10" //Add a delay to stagger the animations.
          data-aos-once="false" //Control if the animation happens only once or every time the element is scrolled into view.
          data-aos-mirror="true" //Repeat the animation when scrolling up.
          // data-aos-offset="100" //Adjust the trigger point of the animation relative to the viewport.
          className=" flex flex-col justify-between p-6 space-y-6 rounded-lg bg-gradient-to-tr from-[#FF6F48]  to-[#F02AA6]  "
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            Check out our most popular courses!
          </h1>
        </div>

        {/*2 */}
        <div
          className="  flex-col  p-6 space-y-6 
        rounded-lg bg-white md:flex "
        >
          <img src={AnimationIcon} alt="Animation" className="w-16 -mt-14" />

          <h5 className="text-lg lg:text-2xl font-bold">Animation</h5>

          <p className="text-sm text-gray-500 ">
            Learn the latest animation techniques to create stunning motion
            design and captivate your audience.
          </p>

          <a class="text-[#ec4899] text-lg font-bold" href="#Get Started">
            Get Started
          </a>
        </div>

        {/*3  */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
          data-aos-once="false"
          data-aos-mirror="true"
          //data-aos-offset="100"
          className="  flex-col  p-6 space-y-6 
        rounded-lg bg-white md:flex "
        >
          <img src={DesignIcon} alt="DesignIcon" className="w-16 -mt-14" />

          <h5 className="text-lg lg:text-2xl font-bold">Design</h5>

          <p className="text-sm text-gray-500 ">
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </p>
          <a class="text-[#ec4899] text-lg font-bold" href="#Get Started">
            Get Started
          </a>
        </div>

        {/*4  */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
          data-aos-once="false"
          data-aos-mirror="true"
          //data-aos-offset="100"
          // data-aos-anchor-placement="top-bottom" //Define which part of the element should trigger the animation.
          className="  flex-col  p-6 space-y-6 
        rounded-lg bg-white md:flex  "
        >
          <img
            src={PhotograpIcon}
            alt="PhotograpIcon"
            className="w-16 -mt-14"
          />

          <h5 className="text-lg lg:text-2xl font-bold">Photography</h5>

          <p className="text-sm text-gray-500 ">
            Explore critical fundamentals like lighting, composition, and focus
            to capture exceptional photos.
          </p>
          <a class="text-[#ec4899] text-lg font-bold" href="#Get Started">
            Get Started
          </a>
        </div>

        {/*5  */}
        <div
          className="  flex-col  p-6 space-y-6 
        rounded-lg bg-white md:flex  "
        >
          <img src={IconCrypto} alt="CryptoIcon" className="w-16 -mt-14" />

          <h5 className="text-lg lg:text-2xl font-bold">Crypto</h5>

          <p className="text-sm text-gray-500 ">
            All you need to know to get started investing in crypto. Go from
            beginner to advanced with this 54 hour course.
          </p>
          <a class="text-[#ec4899] text-lg font-bold" href="#Get Started">
            Get Started
          </a>
        </div>

        {/*6  */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
          data-aos-once="false"
          data-aos-mirror="true"
          //data-aos-offset="100"
          className="  flex-col  p-6 space-y-6 
        rounded-lg bg-white md:flex "
        >
          <img src={BusinessIcon} alt="BusinessIcon" className="w-16 -mt-14" />

          <h5 className="text-lg lg:text-2xl font-bold">Business</h5>

          <p className="text-sm text-gray-500 ">
            A step-by-step playbook to help you start, scale, and sustain your
            business without outside investment.
          </p>
          <a class="text-[#ec4899] text-lg font-bold" href="#Get Started">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
