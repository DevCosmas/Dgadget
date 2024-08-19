import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedAdminRoute = ({ children }) => {
  const token = Cookies.get('adminToken');

  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedAdminRoute;
