import React from 'react';
import Product from '../Page/Product';
import Collection from './Collection';
import Professional from './Professional';
import Discover from './Discover';
import Newproduct from './Newproduct';
import Para from './para';
import Track from './Track';

const Home = () => {
  return (
    <div className="w-full h-full ">
    <div
      className="relative w-full h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-01.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <p className="text-sm md:text-base tracking-widest uppercase font-light">
          Casual & Everyday
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-[5rem] font-serif italic  my-4">
          Effortlessly Blend Comfort <br className="hidden sm:block" /> & Style!
        </h1>

        <p className="max-w-2xl text-sm md:text-base font-medium leading-relaxed">
          Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters,
          versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures
        </p>

        <button className="mt-8 px-10 py-3 border border-white text-white text-[0.8rem] hover:bg-white hover:text-black transition duration-300">
          VIEW COLLECTION
        </button>
      </div>
       </div>

      
<div className="py-20 px-4  bg-white">
   <h2 className="text-3xl  md:text-5xl font-serif italic  text-center mb-6">Most Popular</h2> 
    <Product/>
    </div>

      <Collection />
      <Professional />
      <Discover/>
      <Newproduct />
      <Para/>
      <Track/>
      
   
    </div>

    
  );
};

export default Home;
