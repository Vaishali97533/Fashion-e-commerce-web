import React from 'react'
import { Lock, Truck, RotateCcw, MapPin } from "lucide-react";

function Track() {
  return (
    <div>

      {/* Top Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-8 md:py-25 py-20 px-10 bg-white">
        <div>
          <Lock className="mx-auto h-8 w-8 text-black mb-3" />
          <h3 className="text-xl font-serif italic font-semibold mb-2">
            Secure Payments
          </h3>
          <p className="text-gray-600 text-sm">
            Shop with confidence knowing that your transactions are safeguarded.
          </p>
        </div>
        <div>
          <Truck className="mx-auto h-8 w-8 text-black mb-3" />
          <h3 className="text-xl font-serif italic font-semibold mb-2">
            Free Shipping
          </h3>
          <p className="text-gray-600 text-sm">
            Shopping with no extra charges – savor the liberty of complimentary
            shipping on every order.
          </p>
        </div>
        <div>
          <RotateCcw className="mx-auto h-8 w-8 text-black mb-3" />
          <h3 className="text-xl font-serif italic font-semibold mb-2">
            Easy Returns
          </h3>
          <p className="text-gray-600 text-sm">
            With our hassle-free Easy Returns, changing your mind has never been
            more convenient.
          </p>
        </div>
        <div>
          <MapPin className="mx-auto h-8 w-8 text-black mb-3" />
          <h3 className="text-xl font-serif italic font-semibold mb-2">
            Order Tracking
          </h3>
          <p className="text-gray-600 text-sm">
            Stay in the loop with our Order Tracking feature – from checkout to
            your doorstep.
          </p>
        </div>
      </section>

      {/* Hero / Parallax Section */}
      <section
        className="relative bg-fixed bg-center bg-cover min-h-[90vh] flex items-center px-6"
        style={{
          backgroundImage:
            "url('https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-005.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10 "></div>
        <div className="text-white max-w-3xl ml-auto p-6 md:p-12 z-30">
          <p className="uppercase tracking-widest text-sm mb-2">Explore</p>
          <h1 className="text-4xl md:text-5xl font-serif italic font-semibold leading-tight">
            Elevate Your Wardrobe, <br />
            Embrace Timeless Style!
          </h1>
          <p className="mt-4 text-sm md:text-lg font-medium">
            Explore our collections today and experience the joy of fashion. Shop
            now for the epitome of chic sophistication!
          </p>
          <button className="mt-6 border text-white border-white px-6 font-semibold  py-2 text-sm hover:bg-black hover:text-white transition">
         Shop Now
          </button>
        </div>
      </section>   

    </div>
  )
}

export default Track