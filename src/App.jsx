import React from 'react';

import Home from '../Page/Home';
import About from '../Page/About';
import Product from '../Page/Product';
import Collection from '../Page/Collection';
import Shop from '../Page/Shop';
import Professional from '../Page/Professional';
import Discover from '../Page/Discover';
import Newproduct from '../Page/Newproduct';
import Para from '../Page/para'; 
import Track from '../Page/Track';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productdetail from '../Page/Productdetail';

import Layout from './Components/Layout';

function App() {
  return (
    <div >
      <BrowserRouter>
        {/* <Navber /> */}
        <div  className="flex flex-col h-full w-full">
          <Routes>

            {/* Main layout wrapper */}
        <Route path="/" element={<Layout />}>

        {/* Nested routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/newproduct" element={<Newproduct />} />
            <Route path="/para" element={<Para />} /> {/* ✅ Fixed */}
            <Route path="/track" element={<Track />} />

            <Route path="/productdetail" element={<Productdetail />} />
            <Route path="/shop" element={<Shop />} />
            {/* Add more routes as needed */}
            </Route>

          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
