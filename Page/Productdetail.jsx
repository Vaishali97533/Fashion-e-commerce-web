import React, { useState } from 'react';
import Product from './Product';

export default function Productdetail() {
  const [size, setSize] = useState('M');
  const [color, setColor] = useState('white');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['XL', 'L', 'M', 'S', 'XS'];
  const colors = [
    { name: 'black', value: 'bg-black' },
    { name: 'green', value: 'bg-green-700' },
    { name: 'red', value: 'bg-red-600' },
    { name: 'white', value: 'bg-white border border-gray-400' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-08-a.jpg"
          alt="Timeless Classic Collection"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <nav className="text-sm text-gray-600">Home / Work & Office / Timeless Classic Collection</nav>
        <h2 className="text-2xl font-semibold">Timeless Classic Collection</h2>
        <div className="text-xl font-bold text-gray-800">$124.90 – $154.90 <span className="text-sm font-medium text-green-600">& Free Shipping</span></div>

        <p className="text-gray-700 text-base">
          Crafted from soft, breathable fabrics, the relaxed fit provides a carefree silhouette, while thoughtful
          details add a touch of urban chic. Whether you're lounging at home or navigating a bustling day, our
          Timeless Classic Collection effortlessly combine ease with fashion.
        </p>

        {/* Size Selection */}
        <div>
          <p className="font-medium mb-1">Size</p>
          <div className="flex gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-3 py-1 border rounded ${
                  size === s ? 'border-black font-semibold' : 'border-gray-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <p className="font-medium mb-1">Color</p>
          <div className="flex items-center gap-3">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                className={`w-6 h-6 rounded-full ${c.value} ${
                  color === c.name ? 'ring-2 ring-black' : ''
                }`}
              />
            ))}
          </div>
        </div>

        {/* Price & Quantity */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-semibold">$124.90</div>
          <div className="flex items-center border border-gray-300 rounded">
            <button
              className="px-3 py-1"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              className="px-3 py-1"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
          ADD TO CART
        </button>

        {/* Secure Checkout */}
        {/* <div className="pt-6">
          <p className="text-sm text-gray-600">Guaranteed Safe Checkout</p>
          <div className="flex gap-4 mt-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-6" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" className="h-6" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" className="h-6" alt="AmEx" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Discover_Card_logo.svg" className="h-6" alt="Discover" />
          </div>
        </div> */}


      </div>
      </div>

      <Product/>
    </div>
  );
}
