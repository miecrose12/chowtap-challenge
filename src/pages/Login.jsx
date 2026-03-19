import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice';
import { useForm } from '../hooks/useForm.js';
import { validateEmail, validatePassword, getFormErrors, validateCredentials } from '../utils/validation.js';
import logo from '../assets/login left.svg';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [showPassword, setShowPassword] = useState(false);

  const { formData, errors, touched, handleChange, handleBlur, handleSubmit, setErrors } = useForm(
    { email: '', password: '', rememberMe: false },
    (data) => {
      const formErrors = getFormErrors({ email: data.email, password: data.password });

      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        toast.error('Please fix the errors in the form');
        return;
      }

      dispatch(loginStart());

      setTimeout(() => {
        if (validateCredentials(data.email, data.password)) {
          dispatch(loginSuccess({ user: 'ChowTap User', email: data.email }));
          toast.success('Login successful!');
          navigate('/dashboard');
        } else {
          const loginError = 'Invalid email or password';
          dispatch(loginFailure(loginError));
          setErrors({ form: loginError });
          toast.error(loginError);
        }
      }, 1000);
    }
  );

  const formErrors = {
    email: touched.email
      ? validateEmail(formData.email) ? '' : 'Please enter a valid email address'
      : '',
    password: touched.password
      ? validatePassword(formData.password) ? '' : 'Password must be at least 6 characters'
      : '',
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">

      <section className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-white border-r border-gray-100">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Kanban Logo" className="w-64 h-64 object-contain" />
        </div>
      </section>


      <section className="flex flex-col items-center justify-center w-full lg:w-1/2 px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-md">

          <div className="flex justify-center mb-6">
            <img src={logo} alt="Kanban Logo" className="w-12 h-12 object-contain" />
          </div>

      
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Log in to your account</h2>
            <p className="text-gray-500">Welcome back! Please enter your details.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

          
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
                  formErrors.email
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-blue-600 focus:border-blue-600'
                }`}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>

          
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
                    formErrors.password
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-blue-600 focus:border-blue-600'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
              )}
            </div>

     
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-600">
                  Remember for 30 days
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">
                Forgot password
              </a>
            </div>

      
            {errors.form && (
              <p className="text-sm text-red-600 text-center">{errors.form}</p>
            )}

    
            <button
              type="submit"
              disabled={loading || Object.keys(formErrors).some((k) => formErrors[k])}
              className="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>

       
            <button
              type="button"
              className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign in with Google
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#" className="font-semibold text-blue-700 hover:text-blue-800">
              Sign up
            </a>
          </p>

        </div>
      </section>

    </div>
  );
};

export default Login;