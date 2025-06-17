import React from 'react';

const products = [
  {
    id: 1,
    image: 'https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-08-a-400x488.jpg',
    category: 'Work & Office',
    title: 'Timeless Classic Collection',
    price: '$124.90',
    sizes: ['XL', 'L', 'M', 'S', 'XS'],
    colors: ['#000000', '#00a86b', '#ff0000', '#ffffff'],
  },
  {
    id: 2,
    image: 'https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-06-a-black-400x488.jpg',
    category: 'Casual',
    title: 'Bohemian Rhapsody Attire',
    price: '$145.50',
    sizes: ['XL', 'L', 'M', 'S', 'XS'],
    colors: ['#000000', '#00a86b', '#ff0000'],
  },
  {
    id: 3,
    image: 'https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-05-a-white-400x488.jpg',
    category: 'Evening Dresses',
    title: 'Midnight Gala Maxi Dress',
    price: '$175.00',
    sizes: ['L', 'M', 'S', 'XS'],
    colors: ['#000000', '#00a86b', '#ff0000', '#ffffff'],
  },
  {
    id: 4,
    image: 'https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-01-a-400x488.jpg',
    category: 'Casual',
    title: 'Power Suit Ensemble',
    price: '$125.50',
    sizes: ['XL', 'L', 'M', 'S', 'XS'],
    colors: ['#000000', '#00a86b', '#ff0000', '#ffffff'],
  },
];

const Product = () => {
  return (
    <div className="py-10 px-4 md:px-16 bg-white">
      {/* <h2 className="text-3xl md:text-5xl font-serif italic  text-center mb-16">Most Popular</h2> */}
      <div className="grid grid-cols-1 md:px-20 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img src={product.image} alt={product.title} className="w-full h-[350px] object-cover rounded" />
            <p className="text-gray-400 text-sm mt-4">{product.category}</p>
            <h3 className="font-medium mt-1 font-serif italic">{product.title}</h3>
            <p className="font-semibold mt-1">{product.price}</p>

            {/* Sizes */}
            <div className="flex justify-center flex-wrap gap-2 mt-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="border border-gray-400 text-gray-400 px-3 py-1 text-sm rounded hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Colors */}
            <div className="flex justify-center gap-3 mt-3">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-5 h-5 rounded-full border border-black"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
