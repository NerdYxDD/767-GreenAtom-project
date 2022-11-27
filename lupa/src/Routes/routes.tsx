import React from 'react';
import { Navigate } from 'react-router-dom';

import LoginPage from '../pages/LoginPage/LoginPage';
import QuizPage from '../pages/QuizPage/QuizPage';
import QuizListPage from '../pages/QuizListPage/QuizListPage';
import EditEventModal from '../pages/AdminPage/components/EditEventModal/EditEventModal';
import AdminPage from '../pages/AdminPage/AdminPage';

export const publicRoutes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <Navigate to='/login' />,
  },
];

export const guestRoutes = [
  {
    path: '/quiz',
    element: <QuizPage />,
  },
  {
    path: '/quizList',
    element: <QuizListPage />,
  },
  {
    path: '*',
    element: <Navigate to='/quizList' />,
  },
];

export const adminRoutes = [
  {
    path: '/editEventModal',
    element: <EditEventModal />,
  },
  {
    path: '/adminPage',
    element: <AdminPage />,
  },
  {
    path: '*',
    element: <Navigate to='/adminPage' />,
  },
];
