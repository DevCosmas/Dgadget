import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
          Go Back Home
        </Link>
      </div>
      <div className="mt-12">
        <img
          src="https://via.placeholder.com/400x300" // Replace with a relevant image or illustration
          alt="Not Found Illustration"
          className="w-64 h-64 object-contain"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
