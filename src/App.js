import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
// import ShoppingCart from './components/cart';
import CartPage from './pages/cart';
import AuthPage from './pages/auth';
import LoginPage from './auth/login';
import SignUpPage from './auth/signup';

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
