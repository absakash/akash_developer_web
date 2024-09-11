import React from 'react';
import Header from '../share/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
      return (
            <div>
                  <Header></Header>
                  <Outlet></Outlet>
            </div>
      );
};

export default MainLayout;