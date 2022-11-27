import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

import { adminRoutes, guestRoutes, publicRoutes } from './Routes/routes';
import { useAppDispatch, useAppSelector } from './redux/hooks/redux.hooks';
import { userSelector } from './redux/selectors/user.selector';
import { getAdminProfile } from './redux/reducers/User/user.requests';
import AdminPage from './pages/AdminPage/AdminPage';

const App = () => {
  const dispatch = useAppDispatch();

  const { admin, authorized } = useAppSelector(userSelector);

  useEffect(() => {
    dispatch(getAdminProfile());
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/' element={<Layout />}>
          {!authorized &&
            publicRoutes.map((one) => (
              <Route key={one.path} path={one.path} element={one.element} />
            ))}
          {authorized &&
            admin.id &&
            adminRoutes.map((one) => (
              <Route key={one.path} path={one.path} element={one.element} />
            ))}
          {authorized &&
            admin.id === '' &&
            guestRoutes.map((one) => (
              <Route key={one.path} path={one.path} element={one.element} />
            ))}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
