import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoadingSpinner />} />
      </Routes>
    </>
  );
}
