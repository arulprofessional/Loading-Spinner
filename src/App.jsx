import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import Navigation from './Navigation';
import Page1 from './Page1';
import Page2 from './Page2';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LoadingSpinner />} />
          <Route path="Page1" element={<Page1 />} />
          <Route path="Page2" element={<Page2 />} />
        </Route>
      </Routes>
    </>
  );
}
