import { createSlice } from '@reduxjs/toolkit';

// Load auth state from localStorage on startup
const loadAuthFromStorage = () => {
  try {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      return JSON.parse(savedAuth);
    }
  } catch (error) {
    console.error('Error loading auth from localStorage:', error);
  }
  return null;
};

const initialState = loadAuthFromStorage() || {
  isAuthenticated: false,
  user: null,
  email: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;

      // Save to localStorage
      localStorage.setItem(
        'auth',
        JSON.stringify({
          isAuthenticated: state.isAuthenticated,
          user: state.user,
          email: state.email,
          loading: state.loading,
          error: state.error,
        })
      );
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      
      // Clear localStorage on login failure
      localStorage.removeItem('auth');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.email = null;

      // Clear localStorage on logout
      localStorage.removeItem('auth');
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;