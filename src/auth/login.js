import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/user';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    login,
    errMsg,
    msg,

    isErr,
    isLoading,
    setErrMsg,
    setMsg,
    setIsErr,
  } = useUserAuth();

  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
  };

  const handleGoogleFailure = (response) => {
    console.error('Google login failed:', response);
  };

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

  const handleLogin = async (e) => {
    const loginDetails = {
      email,
      password,
    };
    e.preventDefault();
    const isLogged = await login(loginDetails);
    if (isLogged) navigate('/shop');
    return;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form
          onSubmit={handleLogin}
          className="mb-4">
          {(isErr || msg !== null || errMsg !== null) && (
            <div
              className={`mb-4 py-2 text-center px-4 rounded-md text-white ${
                isErr ? 'bg-red-500' : 'bg-green-500'
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full ${
              isLoading
                ? 'bg-blue-100 text-slate-800 '
                : 'bg-blue-500 text-white '
            }p-2 rounded sm:hover:bg-blue-600`}>
            {isLoading ? 'Authenticating' : ' Log In'}
          </button>
        </form>
        <div className="text-center mb-4">or</div>
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID}
          buttonText="Continue with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
          className="w-full"
        />
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <a
            href="/signup"
            className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
