import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
// import Login from './pages/Login/Login';
// import FormPage from './pages/FormPage/FormPage';
import { Form } from './pages/FormPage/components/Form';

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Form />} />
          
      </Route>
    </Routes>
  </div>
);

export default App;
