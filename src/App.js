import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import CartPage from './pages/cart';
import LoginPage from './auth/login';
import SignUpPage from './auth/signup';
import NotFoundPage from './pages/404';
import Loader from './components/loader';
import ProtectedRoute from './pages/protected';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => setLoading(false);
    window.addEventListener('load', handleLoading);

    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => {
      window.removeEventListener('load', handleLoading);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/shop"
            element={<ProductsPage />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/signup"
            element={<SignUpPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
