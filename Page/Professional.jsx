// File: HeroSection.jsx
import React from "react";

export default function Professional() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-full px-6  py-10 bg-white">
      {/* Left Section - Text */}
      <div className="w-full md:w-1/2 lg:pl-35 space-y-6">
        <p className="uppercase   font-serif  italic tracking-widest text-gray-500 font-semibold">
          Work & Office Attire
        </p>
        <h1 className="text-4xl md:text-5xl font-serif  italic font-medium text-black leading-tight">
          Professional Pinstripe <br />
          Blazers Collection
        </h1>
        <p className="text-gray-500 text-base  font-semibold max-w-md">
          Elevate your workwear with our Professional Pinstripe Blazers
          Collection, where tailored sophistication meets modern confidence for
          a powerfully polished office look.
        </p>
        <button className="mt-4 px-6 py-2 border text-base font-semibold border-gray-800 text-gray-700 hover:bg-black hover:text-white transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2  mt-10 md:mt-0">
        <img
          src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-05-1.jpg"
          alt="Woman in blazer"
          className="w-full h-[40rem] object-bottom-right rounded-md"
        />
      </div>
    </section>
  );
}
