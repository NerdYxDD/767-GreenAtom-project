import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';


import { adminRoutes, guestRoutes, publicRoutes } from './Routes/routes';
import { useAppDispatch, useAppSelector } from './redux/hooks/redux.hooks';
import { guestSelector } from './redux/selectors/guest.selector';
import { getAdminProfile } from './redux/reducers/Admin/admin.requests';
import { adminSelector } from './redux/selectors/admin.selector';

const App = () => {
  const dispatch = useAppDispatch();

  const { authorized } = useAppSelector(guestSelector);
  const { user } = useAppSelector(adminSelector);

  useEffect(() => {
    dispatch(getAdminProfile())
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route index element={ <HomePage/> }/>
        <Route path='/' element={ <Layout/> }>
          {!authorized && publicRoutes.map((one) => (
            <Route key={ one.path } path={ one.path } element={ one.element }/>
          )) }
          {authorized && !user.id && guestRoutes.map((one) => (
            <Route key={ one.path } path={ one.path } element={ one.element }/>
          )) }
          {authorized && !user.id && adminRoutes.map((one) => (
            <Route key={ one.path } path={ one.path } element={ one.element }/>
          )) }
        </Route>
      </Routes>
    </div>
  );
}

export default App;
