import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';


import { adminRoutes, guestRoutes, publicRoutes } from './Routes/routes';
import { useAppSelector } from './redux/hooks/redux.hooks';
import { guestSelector } from './redux/selectors/guest.selector';

const App = () => {
  const { authorized } = useAppSelector(guestSelector);

  return (
    <div className='App'>
      <Routes>
        <Route index element={ <HomePage/> }/>
        <Route path='/' element={ <Layout/> }>
          {!authorized && publicRoutes.map((one) => (
            <Route key={ one.path } path={ one.path } element={ one.element }/>
          )) }
          {authorized && guestRoutes.map((one) => (
            <Route key={ one.path } path={ one.path } element={ one.element }/>
          )) }
          {authorized && adminRoutes.map((one) => (
            <Route key={ one.path } path={ one.path } element={ one.element }/>
          )) }
        </Route>
      </Routes>
    </div>
  );
}

export default App;
