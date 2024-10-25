import React from 'react';
import { routeMap } from '../utils/constants';
import { Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {routeMap.map((route) => {
          const Element = route.element;
          return (
            <Route
              key={route._id}
              path={route.URL}
              element={<Element />}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
