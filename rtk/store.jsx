// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../src/server/api'; // 👈 same name use karo

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // ✅ yahi name use karo
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
