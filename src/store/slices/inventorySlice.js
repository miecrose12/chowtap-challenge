import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Maggi', buyingPrice: '800', quantity: 150, threshold: 50, expiry: '2025-12-31', availability: 'In-stock' },
    { id: 2, name: 'Bru', buyingPrice: '1200', quantity: 80, threshold: 40, expiry: '2025-06-30', availability: 'In-stock' },
    { id: 3, name: 'Red Bull', buyingPrice: '3000', quantity: 30, threshold: 20, expiry: '2025-09-15', availability: 'Low stock' },
    { id: 4, name: 'Bourn Vita', buyingPrice: '2500', quantity: 120, threshold: 60, expiry: '2025-11-20', availability: 'In-stock' },
    { id: 5, name: 'Horlicks', buyingPrice: '3500', quantity: 45, threshold: 30, expiry: '2025-08-10', availability: 'In-stock' },
    { id: 6, name: 'Harpic', buyingPrice: '1500', quantity: 20, threshold: 30, expiry: '2025-07-05', availability: 'Low stock' },
    { id: 7, name: 'Ariel', buyingPrice: '5000', quantity: 60, threshold: 50, expiry: '2025-10-12', availability: 'In-stock' },
    { id: 8, name: 'Scotch Brite', buyingPrice: '800', quantity: 100, threshold: 40, expiry: '2025-12-25', availability: 'In-stock' },
    { id: 9, name: 'Coca Cola', buyingPrice: '1000', quantity: 0, threshold: 20, expiry: '2025-05-30', availability: 'Out of stock' },
  ],
  currentPage: 1,
  itemsPerPage: 10,
  overall: {
    categories: 14,
    totalProducts: 868,
    topSelling: 5,
    lowStocks: 12,
  },
  loading: false,
  error: null,
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = inventorySlice.actions;
export default inventorySlice.reducer;