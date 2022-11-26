import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import QuizPage from './pages/QuizPage/QuizPage';

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<QuizPage />} />
      </Route>
    </Routes>
  </div>
);

export default App;
