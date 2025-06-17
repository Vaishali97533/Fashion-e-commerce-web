import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-6  z-50 ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-1 font-semibold text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-1 font-semibold text-gray-600">
            <li><a href="#">Casual</a></li>
            <li><a href="#">Work & Office</a></li>
            <li><a href="#">Activewear</a></li>
            <li><a href="#">Evening Dresses</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-1 font-semibold text-gray-600">
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <ul className="space-y-1 font-semibold text-gray-600">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
