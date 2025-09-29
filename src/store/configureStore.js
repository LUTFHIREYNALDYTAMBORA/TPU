// src/store/configureStore.js

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
// import rootReducer from './reducers'; // Asumsikan Anda memiliki file reducers/index.js

// 1. Fungsi untuk membuat Store
const makeStore = (context) => 
  configureStore({
    reducer: {},
    // Tambahkan middleware lain jika diperlukan
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        // Menonaktifkan pemeriksaan serialisasi untuk menghindari warning di dev mode
        serializableCheck: false, 
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });

// 2. Export Wrapper
// Konfigurasi wrapper Next.js dengan fungsi makeStore
// Debug: true hanya disarankan di lingkungan pengembangan
export const wrapper = createWrapper(makeStore, { debug: false });