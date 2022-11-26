import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage/QuizPage';
import QuizListPage from './pages/QuizListPage/QuizListPage';

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/quizList' element={<QuizListPage />} />
      </Route>
    </Routes>
  </div>
);

export default App;
