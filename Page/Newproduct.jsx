import React from 'react'
const products = [
  {
    id: 1,
    image: "https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-02-a-400x488.jpg",
    type: "Activewear",
    name: "Professional Pinstripe Blazer",
    price: "$109.99",
  },
  {
    id: 2,
    image: "https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-07-a.jpg",
    type: "Work & Office",
    name: "Relaxed Fit Joggers",
    price: "$250.00",
  },
  {
    id: 3,
    image: "https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-04-a-400x488.jpg",
    type: "Evening Dresses",
    name: "Urban Chic Ensemble",
    price: "$224.95",
  },
  {
    id: 4,
    image: "https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-03-a-400x488.jpg",
    type: "Activewear",
    name: "Weekend Wanderlust Wardrobe",
    price: "$119.95",
  },
];


function Newproduct() {
  return (
    <div>
        <section className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-medium font-serif text-center mb-16 italic">
        Newest Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[380px] object-cover"
            />
            <p className="text-gray-400 text-sm mt-3">{product.type}</p>
            <h3 className="mt-1 text-[0.7rem] font-medium">{product.name}</h3>
            <p className="mt-1 text-gray-400 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Newproduct