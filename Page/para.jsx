import React from 'react'

function para() {
  return (
    <div>

        <section
      className="relative bg-fixed bg-center bg-cover min-h-[95vh] flex items-center justify-center px-6 text-white"
      style={{
        backgroundImage:
          "url('https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-04.jpg')",
      }}
    >

         {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10 "></div>



      <div className=" p-6 md:p-12 max-w-4xl text-center z-40 rounded-xl">
        {/* Star Rating */}
        <div className="text-yellow-400 text-2xl mb-4">
          {"★".repeat(5)}
        </div>

        {/* Testimonial Text */}
        <p className="text-lg md:text-2xl italic font-serif leading-relaxed text-white">
          “FemmeWardrobe Is My Fashion Sanctuary! The Curated Collection
          Effortlessly Blends Chic Trends With Timeless Elegance, Making Every
          Purchase A Delightful Discovery. The Quality Of Their Pieces Is
          Unmatched, And I Appreciate The Brand’s Commitment To Sustainable
          Fashion. What Truly Sets FemmeWardrobe Apart Is Their Customer-Centric
          Approach.”
        </p>

        {/* Author */}
        <p className="mt-6 text-sm md:text-base tracking-wide uppercase text-white font-semibold">
          Sarah M., Devoted FemmeWardrobe Fan
        </p>
      </div>
    </section>

    </div>
  )
}

export default para