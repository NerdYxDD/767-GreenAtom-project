import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
import HomePage from './pages/HomePage/HomePage';
import { Form } from './pages/FormPage/components/Form';

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path='/home' element={<HomePage />} />
      <Route path='/form' element={<Form />} />
    </Routes>
  </div>
);

export default App;
