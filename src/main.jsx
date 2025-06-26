// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from '../rtk/store'; // ✅ FIXED HERE
import { Provider } from 'react-redux';
import './index.css'; // Import your global styles
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
