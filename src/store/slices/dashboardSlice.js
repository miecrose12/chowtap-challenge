import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  salesCards: [
    { label: 'Sales', value: '₦ 832', image: 'dashboardIcon' },
    { label: 'Revenue', value: '₦ 18,300', image: 'cancel' },
    { label: 'Profit', value: '₦ 868', image: 'profit' },
    { label: 'Cost', value: '₦ 868', image: 'cost' },
  ],

  purchaseCards: [
    { label: 'Purchase', value: '82', image: 'purchase' },
    { label: 'Cost', value: '₦ 13,573', image: 'cost1' },
    { label: 'Cancel', value: '5', image: 'cancel' },
    { label: 'Return', value: '₦ 17,432', image: 'profit' },
  ],

  salesPurchaseChart: {
    data: [
      { month: 'Jan', purchase: 54000, sales: 48000 },
      { month: 'Feb', purchase: 57000, sales: 46000 },
      { month: 'Mar', purchase: 44000, sales: 52000 },
      { month: 'Apr', purchase: 36000, sales: 43000 },
      { month: 'May', purchase: 43000, sales: 45000 },
      { month: 'Jun', purchase: 27000, sales: 41000 },
      { month: 'Jul', purchase: 54000, sales: 49000 },
      { month: 'Aug', purchase: 44000, sales: 42000 },
      { month: 'Sep', purchase: 44000, sales: 43000 },
    ],
    yAxisTicks: [10000, 20000, 30000, 40000, 50000, 60000],
    yAxisDomain: [0, 60000],
    filterLabel: 'Weekly',
  },

  orderSummaryChart: {
    data: [
      { month: 'Jan', ordered: 3800, delivered: 2800 },
      { month: '', ordered: 1600, delivered: 3200 },
      { month: 'Feb', ordered: 2700, delivered: 3700 },
      { month: '', ordered: 2300, delivered: 3100 },
      { month: 'Mar', ordered: 2500, delivered: 2400 },
      { month: '', ordered: 2000, delivered: 3000 },
      { month: 'Apr', ordered: 1400, delivered: 3300 },
      { month: '', ordered: 2000, delivered: 2200 },
      { month: 'May', ordered: 2300, delivered: 3300 },
    ],
    yAxisTicks: [0, 1000, 2000, 3000, 4000],
    yAxisDomain: [0, 4000],
  },

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