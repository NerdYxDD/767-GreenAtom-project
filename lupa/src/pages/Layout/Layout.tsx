import React from 'react';
import { Outlet } from 'react-router-dom';
// @ts-ignore
import styles from './Layout.module.scss';
import Header from './components/Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={styles.Content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
