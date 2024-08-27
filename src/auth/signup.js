import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/user';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signUp, errMsg, msg, isErr, isLoading, setErrMsg, setMsg, setIsErr } =
    useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (msg || errMsg) {
      const timer = setTimeout(() => {
        setMsg(null);
        setErrMsg(null);
        setIsErr(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [msg, errMsg, setErrMsg, setIsErr, setMsg]);

  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
  };

  const handleGoogleFailure = (response) => {
    console.error('Google login failed:', response);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const signUpDetails = {
      email,
      password,
      username,
      confirmPassword,
    };

    const register = await signUp(signUpDetails);

    if (register) navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form
          onSubmit={handleSignUp}
          className="mb-4">
          {(isErr || msg !== null || errMsg !== null) && (
            <div
              className={`mb-4 py-2 px-4 rounded-md text-white ${
                isErr ? 'bg-red-300' : 'bg-green-300'
              }`}>
              {isErr ? errMsg : msg}
            </div>
          )}
          <div className="mb-4">
            <label
              className="block mb-1"
              htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1"
              htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1"
              htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1"
              htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center mb-4">or</div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Continue with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
          className="w-full"
        />
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
