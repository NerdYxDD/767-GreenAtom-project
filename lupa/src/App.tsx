import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  </div>
);

export default App;
