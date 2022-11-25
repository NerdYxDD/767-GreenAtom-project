import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <>
      <div>HEADER</div>
      <div><Outlet/></div>
    </>
  );

export default Layout;