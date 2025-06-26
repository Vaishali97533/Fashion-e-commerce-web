import React from 'react'
import Product from './Product'
import Newproduct from './Newproduct'

function Shop() {
  return (
    <div>
        {/* Hero Section */}
        <div className="relative h-[55vh] md:h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-10.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="relative text-white text-4xl md:text-6xl font-semibold font-serif italic z-10">Shop</h1>
        </div>
    
        {/* Content Section */}
        <div className="px-6 py-12 md:px-20 md:py-20 bg-white grid md:grid-cols-2 gap-10">
            <div>
            <h2 className="text-2xl md:text-3xl font-serif italic leading-snug">
                Discover Your Style<br />
                at FemmeWardrobe
            </h2>
            </div>
            <div>
            <h4 className="uppercase text-base text-gray-500 tracking-widest mb-3">Our Collection</h4>
            <p className="italic text-base font-medium mb-4">
                Explore our curated selection of fashion-forward pieces designed to elevate your wardrobe.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
                From timeless classics to the latest trends, each item is crafted with care and attention to detail. 
                Find the perfect outfit that reflects your unique style and personality.
            </p>
            </div>
        </div>
        <Product />
        <Newproduct />
        

        
    </div>
  )
}

export default Shop