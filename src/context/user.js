import axios from 'axios';
import { useContext, useState, createContext } from 'react';
import API_URL from '../constant/api';
import Cookies from 'js-cookie';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [msg, setMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const signUp = async (signUpDetails) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_URL}/user/sign-up`,
        signUpDetails
      );
      console.log(response);
      if (response.status === 201) {
        setMsg(response.data.message);
        return true;
      } else {
        setIsErr(true);
      }
    } catch (error) {
      console.log(error.response);
      setErrMsg(error.response?.data?.message || 'Sign up failed');
      setIsErr(true);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (loginDetails) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${API_URL}/user/login`, loginDetails);

      console.log(response);
      if (response.status === 200) {
        setMsg(response.data.message);
        const user = response.data.loggedUser;
        localStorage.setItem('user', JSON.stringify(user));
        Cookies.set('token', response.data.token, { expires: 1 / 24 });
        return true;
      } else {
        setIsErr(true);
      }
    } catch (error) {
      console.log(error.response);
      setErrMsg(error.response?.data?.message || 'Login failed');
      setIsErr(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        signUp,
        errMsg,
        msg,
        isErr,
        isLoading,
        setErrMsg,
        setMsg,
        setIsErr,
      }}>
      {children}
    </UserContext.Provider>
  );
};

function useUserAuth() {
  return useContext(UserContext);
}

export { useUserAuth, UserProvider };
