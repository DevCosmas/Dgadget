import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../constant/api';
import SingleProductcomp from './single_product';
import { FaEye } from 'react-icons/fa';

export default function ProductComp() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // State for filters
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/product/get-product`, {
        params: {
          page,
          limit: 10,
          name: search,
          category,
          priceMin,
          priceMax,
        },
      });

      setProducts(response.data.data);
      setTotalPages(Math.ceil(response.data.totalResults / 10));
    } catch (error) {
      setError('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, search, category, priceMin, priceMax]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const handleQuantityChange = (e, productId) => {
    console.log(
      'Quantity changed for productId:',
      productId,
      'to:',
      e.target.value
    );
  };

  async function handleSingleProject(productId) {
    // setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/product/get-one-product/${productId}`
      );
      console.log(response);
      setSelectedProduct(response.data.data);
      console.log(response.data.data, 'selected product');
    } catch (error) {
      setError('Error fetching products');
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setSelectedProduct(null);
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {loading && (
        <div className="text-center text-blue-500 text-lg">Loading...</div>
      )}
      {error && <div className="text-center text-red-500 text-lg">{error}</div>}

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Search and Filter Products</h2>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-4 md:mb-0 w-full md:w-1/3"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-4 md:mb-0 w-full md:w-1/3"
          />

          <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-1/3">
            <input
              type="number"
              placeholder="Min Price"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 md:mb-0 w-full"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>
      </div>

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <di className="w-full">
                  {' '}
                  <img
                    src={`${API_URL}/images/${product.image}`}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </di>
                <div className="p-4">
                  <span className="flex items-center px-2 py-2">
                    <h3 className="text-xl flex-grow font-semibold mb-2">
                      {product.name}
                    </h3>
                    <FaEye
                      onClick={() => handleSingleProject(product._id)}
                      className="cursor-pointer hover:text-green-600"
                    />
                  </span>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-lg font-bold text-green-600 mb-4">
                    ${product.price}
                  </p>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor={`quantity-${product._id}`}
                      className="mr-2">
                      Qty:
                    </label>
                    <input
                      id={`quantity-${product._id}`}
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="border border-gray-300 rounded-md p-2"
                      onChange={(e) => handleQuantityChange(e, product._id)}
                    />
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 rounded-md text-white ${
                  currentPage === index + 1
                    ? 'bg-blue-600'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}>
                {index + 1}
              </button>
            ))}
          </div>
          {selectedProduct !== null && (
            <SingleProductcomp
              product={selectedProduct}
              close={handleClose}
            />
          )}
        </>
      )}
    </div>
  );
}
