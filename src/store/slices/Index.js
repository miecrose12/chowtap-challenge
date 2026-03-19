import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import dashboardReducer from './dashboardSlice';
import inventoryReducer from './inventorySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    inventory: inventoryReducer,
  },
});

export default store;