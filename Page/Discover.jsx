import React from 'react'

function Discover() {
  return (
    <div>
         <section
      className="relative bg-fixed bg-center bg-cover min-h-screen flex items-center justify-start px-6 md:px-16"
      style={{
        backgroundImage:
          "url('https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-03.jpg')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10 "></div>

      {/* Content Box */}
      <div className="relative md:-top-20 md:left-20 z-10 text-white max-w-xl">
        {/* Floating Image */}
        <div className="mb-6">
          <img
            src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-05-a-black.jpg" 
            alt="Fashion"
            className="w-[28rem] h-[30rem] object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-3xl md:text-4xl font-serif  font-semibold mb-4 italic">
          Discover The Allure Of <br />
          Fashion Reinvented!
        </h1>
        <p className="text-sm md:text-lg font-semibold text-gray-200 mb-6">
          Dive into a world of style with our latest collection! Shop now and
          redefine your wardrobe narrative!
        </p>

        <button className="px-6 py-2 border font-semibold border-white text-white hover:bg-white hover:text-black transition">
          Shop Now
        </button>
      </div>
    </section>

    </div>
  )
}

export default Discover