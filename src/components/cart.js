import React, { useState } from 'react';
import { useCart } from '../context/cart';
import API_URL from '../constant/api';
import CheckoutModal from './checkout';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  const {
    get_items,
    get_total_cost,
    remove_from_cart,
    update_cart,
    clear_cart,
  } = useCart();
  const cartItems = get_items();
  const totalCost = get_total_cost();
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleRemove = (itemId) => {
    remove_from_cart(itemId);
    setSuccessMessage('Item removed from the cart successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleUpdate = (itemId, newQuantity) => {
    update_cart(itemId, newQuantity);
    setSuccessMessage('Cart updated successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleProceedToCheckout = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-5xl my-11 mx-auto p-8 bg-gray-100">
      <div className="flex justify-between items-center border-b pb-6 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Shopping Cart</h2>
        <p className="text-lg text-gray-500">{cartItems.length} items</p>
      </div>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <strong>{successMessage}</strong>
        </div>
      )}

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="space-y-8">
          {cartItems.map((item) => (
            <CartItem
              key={item._id}
              id={item._id}
              title={item.name}
              price={item.price}
              quantity={item.quantity}
              imgSrc={`${API_URL}/images/${item.image}`}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
            />
          ))}

          <div className="flex justify-between items-center py-6 border-t border-gray-200">
            {/* Coupon and Shipping Options */}
            <div className="w-1/2 pr-4">
              <label
                htmlFor="coupon"
                className="block text-sm font-semibold text-gray-700">
                Coupon Code
              </label>
              <div className="flex mt-2">
                <input
                  id="coupon"
                  placeholder="Enter your coupon"
                  className="flex-1 p-3 border rounded-l-lg focus:outline-none focus:ring focus:border-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                  Apply
                </button>
              </div>
            </div>
            {/* <div className="w-1/2 pl-4">
              <label className="block text-sm font-semibold text-gray-700">
                Shipping Options
              </label>
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="shipping-standard"
                    name="shipping"
                    value="standard"
                    className="focus:ring-blue-500"
                  />
                  <label
                    htmlFor="shipping-standard"
                    className="text-sm text-gray-700">
                    Standard (3-5 days) - $5.00
                  </label>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    id="shipping-express"
                    name="shipping"
                    value="express"
                    className="focus:ring-blue-500"
                  />
                  <label
                    htmlFor="shipping-express"
                    className="text-sm text-gray-700">
                    Express (1-2 days) - $10.00
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      )}

      {/* Summary and Checkout */}
      {cartItems.length > 0 && (
        <div className="mt-10 flex flex-col lg:flex-row justify-between items-center border-t pt-6">
          <Link
            to="/shop"
            className="flex items-center text-blue-600 hover:text-blue-800">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"></path>
            </svg>
            Continue Shopping
          </Link>
          <div className="text-right lg:text-left mt-6 lg:mt-0">
            <h4 className="text-2xl font-semibold text-gray-800">
              $ {totalCost}
            </h4>
            <p className="text-sm text-gray-500">Includes taxes and shipping</p>
          </div>
          <button
            onClick={handleProceedToCheckout}
            className="mt-6 lg:mt-0 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700">
            Proceed to Checkout
          </button>
          <button
            onClick={clear_cart}
            className="mt-6 lg:mt-0 px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700">
            Clear cart
          </button>
        </div>
      )}

      {isModalOpen && (
        <CheckoutModal
          onClose={handleCloseModal}
          cartItems={cartItems}
          totalAmount={totalCost}
        />
      )}
    </div>
  );
}

function CartItem({ id, title, price, quantity, imgSrc, onRemove, onUpdate }) {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 0) {
      onUpdate(id, newQuantity);
    }
  };

  const totalItemCost = (price * quantity).toFixed(2);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white shadow rounded-lg">
      <img
        src={imgSrc}
        alt="Thumbnail"
        className="w-full md:w-32 h-32 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button
            onClick={() => onRemove(id)}
            className="text-gray-500 hover:text-red-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="text-sm text-gray-600">
          <p>Price per item: $ {price}</p>
          <p>Total cost: $ {totalItemCost}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="flex items-center border rounded-lg">
          <button className="w-8 h-8 flex justify-center items-center text-gray-600 hover:text-gray-800">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12H9m0 0H7m2 0h8m0 0h-8"></path>
            </svg>
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
          />
          <button className="w-8 h-8 flex justify-center items-center text-gray-600 hover:text-gray-800">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m0 0h2m-2 0H9m0 0h8m-8 0H7m4 0h4"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
      <p className="text-lg text-gray-600">
        Looks like you have no items in your cart.
      </p>
    </div>
  );
}
