import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ user }) {
    return user ? <Outlet user={user} /> : <Navigate to="/student/login" />;
  }
export default PrivateRoute;
