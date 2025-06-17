import React from 'react';

const Collection = () => {
  return (
    <div className="relative  py-10 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover z-0"
        style={{
          backgroundImage: `url('https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-02.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      {/* Floating Right Side Card */}
      <div className="relative z-20   h-full flex items-end justify-end">
        <div className=" p-6 md:p-10   rounded-lg shadow-lg   text-center">
          <img
            src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-03-b.jpg"
            alt="Bag"
            className="w-[30rem] h-[40rem] lg:ml-30 object-cover rounded"
          />
          <h2 className="mt-6 text-xl text-white md:text-4xl font-serif italic ">
            Explore Our Exquisite Bag Collection Now!
          </h2>
          <button className="mt-6 border text-white border-white px-5 py-2 text-sm hover:bg-black hover:text-white transition">
            VIEW COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
