import React from 'react';
import Header from '../share/Header';
import { Outlet } from 'react-router-dom';
import Nav from '../share/Nav';

const MainLayout = () => {
      return (
            <div>
                  {/* <Header></Header> */}
                 
                  <Outlet></Outlet>
            </div>
      );
};

export default MainLayout;