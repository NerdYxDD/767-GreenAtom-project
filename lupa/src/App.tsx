import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
import HomePage from './pages/HomePage/HomePage';

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
      </Route>
        <Route path='/home' element={<HomePage />} />
    </Routes>
  </div>
);

export default App;
