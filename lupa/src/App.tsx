import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage/QuizPage';
import QuizListPage from './pages/QuizListPage/QuizListPage';
import AdminPage from './pages/AdminPage/AdminPage';

const App = () => (
  <div className='App'>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/' element={<Layout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/quizList' element={<QuizListPage />} />
      </Route>
    </Routes>
  </div>
);

export default App;
