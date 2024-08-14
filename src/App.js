import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import ProductsPage from './pages/products';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
