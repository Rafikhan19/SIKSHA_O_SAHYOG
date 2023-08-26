import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouteTeacher({ user }) {
    return user ? <Outlet user={user} /> : <Navigate to="/teacher/login" />;
  }
export default PrivateRouteTeacher;
