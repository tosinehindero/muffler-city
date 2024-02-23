/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './store/Auth-Context';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/adminaccesspage" />;
};

export default ProtectedRoute;