import React from 'react';
import { FcGoogle } from 'react-icons/fc';

function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up / Login
        </h2>

        <button className="flex items-center justify-center w-full bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
          <FcGoogle className="mr-2" />
          Continue with Google
        </button>

        <div className="my-4 flex items-center justify-center">
          <span className="border-t border-gray-300 flex-grow mr-2"></span>
          <span className="text-gray-500">or</span>
          <span className="border-t border-gray-300 flex-grow ml-2"></span>
        </div>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Sign Up / Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
