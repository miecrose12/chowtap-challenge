import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  salesData: [
    { month: 'Jan', purchase: 24000, sales: 13400 },
    { month: 'Feb', purchase: 22000, sales: 13200 },
    { month: 'Mar', purchase: 20000, sales: 10300 },
    { month: 'Apr', purchase: 27800, sales: 20200 },
    { month: 'May', purchase: 18900, sales: 22800 },
    { month: 'Jun', purchase: 23900, sales: 23800 },
  ],
  orderData: [
    { month: 'Jan', ordered: 40000, delivered: 24000 },
    { month: 'Feb', ordered: 35000, delivered: 22000 },
    { month: 'Mar', ordered: 30000, delivered: 20000 },
    { month: 'Apr', ordered: 45000, delivered: 27800 },
    { month: 'May', ordered: 40000, delivered: 18900 },
  ],
  topSellingProducts: [
    { name: 'Surf Excel', sold: 150, remaining: 50, price: '2,500' },
    { name: 'Rin', sold: 120, remaining: 30, price: '2,000' },
    { name: 'Parle G', sold: 200, remaining: 100, price: '500' },
  ],
  lowStockProducts: [
    { name: 'Harpic', quantity: 5 },
    { name: 'Ariel', quantity: 8 },
    { name: 'Rin', quantity: 12 },
  ],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;